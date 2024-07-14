import { ButtonHTMLAttributes } from "react";

export const Button = ({
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button
            className={
                "text-white py-[0.5em] px-[2em] bg-gradient-to-r from-[#13ADC7] via-[#6978D1] to-[#945DD6] rounded-[3rem] font-medium text-[1.75rem]" +
                " hover:opacity-90"
            }
            {...props}
        >
            {children}
        </button>
    );
};
