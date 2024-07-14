import { PropsWithChildren } from "react";

export const H2Title = ({ children }: PropsWithChildren) => {
    return (
        <h2 className="text-[3.7rem] font-semibold text-white">{children}</h2>
    );
};
