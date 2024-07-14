interface ContactProps {
    href: string;
    logo: string;
    size: "small" | "big";
}

export const Contact = ({ href, logo, size }: ContactProps) => {
    const maxSize = size == "big" ? "w-[72px]" : "w-[32px]";
    return (
        <a className={`cursor-pointer`} href={href} target="_blank">
            <img className={maxSize} src={logo} />
        </a>
    );
};
