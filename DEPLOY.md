# Deployment

Pushing to `main` deploys this site to the same VPS that hosts goalGetter, fully
automatically — GitHub Actions does everything server-side (creating the shared Docker
network, starting the shared reverse proxy, building and starting the container). There is
nothing to manually create or copy on the server beyond the prerequisites below.

## Architecture

- Runs on the same VPS as goalGetter, as a third, independent app: `/srv/portfolio`.
- [Caddy](docker/proxy/docker-compose.yml) is the same shared reverse proxy already running
  for goalGetter (project name `goal-getter-proxy`) — it auto-discovers containers via their
  `caddy` labels (see [`docker/deploy/docker-compose.yml`](docker/deploy/docker-compose.yml))
  and issues Let's Encrypt certs per domain. This repo ships an identical copy of that
  compose file and starts it idempotently on every deploy, same as goalGetter does — so it's
  a no-op here since the proxy is already running.
- The app itself is a static Vite build served by nginx (see [`Dockerfile`](Dockerfile)),
  joining the same shared external `edge` network goalGetter's containers use.

## Prerequisites (one-time, outside GitHub)

1. Docker, the Docker Compose plugin, and `rsync` are already on the VPS (goalGetter needs
   them too).
2. DNS: `portfolio.site-url.online` already points at the server's IP. Caddy issues the cert
   automatically on first request to that hostname once this deploys.
3. The SSH key GitHub Actions deploys with is authorized for the `root` user on the server.

### Authorizing the deploy key for root

This repo deploys as `root` (unlike goalGetter's dedicated `deploy` user). You can either
reuse goalGetter's existing deploy keypair or generate a new one — either way, the **public**
half needs to land in `root`'s `authorized_keys`, and the **private** half needs to be this
repo's `SSH_KEY` secret.

**Reusing goalGetter's keypair** (simplest, if you still have `goalgetter_deploy.pub` or can
retrieve it): SSH into the server with whatever access you already have and run:

```bash
# on the VPS, as root or any sudo-capable user
cat goalgetter_deploy.pub >> /root/.ssh/authorized_keys
```

Then set this repo's `SSH_KEY` secret to the exact same private key value already stored in
goalGetter's repos (`cat ./goalgetter_deploy` wherever you still have it, or re-copy the value
from one of those repos' secrets — GitHub won't let you read a secret back, so you need the
original file or to generate a fresh key instead).

**Or generate a fresh keypair just for this repo** — on your local machine:

```bash
ssh-keygen -t ed25519 -C "github-actions-deploy-portfolio" -f ./portfolio_deploy -N ""
ssh-copy-id -i ./portfolio_deploy.pub root@<server-ip>
```

Then put the private key's contents (`cat ./portfolio_deploy`) into this repo's `SSH_KEY`
secret, and delete the local copy once saved:

```bash
rm ./portfolio_deploy
```

Nothing else needs to exist on the server ahead of time — the workflow creates
`/srv/portfolio`, ensures the `edge` network exists (it already does, from goalGetter), and
starts the proxy (already running) on first run.

## One-time GitHub configuration

**Repository secrets** (Settings → Secrets and variables → Actions → Secrets):

| Name | Value |
|---|---|
| `SSH_HOST` | server IP or hostname (same as goalGetter's) |
| `SSH_USER` | `root` |
| `SSH_KEY` | private key matching a public key in `root`'s `authorized_keys` |

**Repository variables** (same page, "Variables" tab — not secret):

| Name | Value |
|---|---|
| `APP_DOMAIN` | `portfolio.site-url.online` |

## What happens on every push to `main`

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

1. SSHes in to `mkdir -p /srv/portfolio` and ensure the `edge` Docker network exists
   (no-op — it already exists because of goalGetter).
2. `rsync`s the checked-out repo straight to the server (no `git` on the server at all — it
   never needs its own GitHub credentials).
3. SSHes in again to: write `docker/deploy/.env` from the `APP_DOMAIN` variable, start the
   shared proxy (`docker compose -p goal-getter-proxy ... up -d`, a no-op since it's already
   running), then
   `docker compose -p portfolio -f docker/deploy/docker-compose.yml --env-file docker/deploy/.env up -d --build --remove-orphans`.

## Troubleshooting

- **First deploy fails on Caddy/cert issues**: confirm DNS for `portfolio.site-url.online`
  already resolves to the server before the first push — Caddy requests the cert on first
  request to that hostname.
- **`docker: network edge not found`**: shouldn't happen (goalGetter already created it, and
  the workflow double-checks), but if it's ever torn down manually, the next deploy of any
  app on the VPS recreates it.
- **Checking logs on the server**:
  `docker compose -p portfolio -f docker/deploy/docker-compose.yml logs -f`
  from `/srv/portfolio`.
- **Checking the shared proxy**: `docker logs goal-getter-proxy` — this container is shared
  with goalGetter, so don't `docker stop`/`rm` it from here without checking that goalGetter
  doesn't need it running.
