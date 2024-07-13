import { MutableRefObject, PropsWithChildren } from "react";

interface AnchorLinkProps extends PropsWithChildren {
    scrollRef: MutableRefObject<HTMLElement | null>;
}

const AnchorLink = ({ children, scrollRef: ref }: AnchorLinkProps) => {
    return (
        <div
            onClick={() => {
                ref?.current?.scrollIntoView({ behavior: "smooth" });
            }}
            className="cursor-pointer"
        >
            {children}
        </div>
    );
};

export { AnchorLink };
