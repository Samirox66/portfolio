interface ContactProps {
    href: string;
    logo: string;
}

export const Contact = ({ href, logo }: ContactProps) => {
    return (
        <a className="cursor-pointer max-w-[32px]" href={href} target="_blank">
            <img src={logo} />
        </a>
    );
};
