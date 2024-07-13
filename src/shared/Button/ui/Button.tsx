import { ButtonHTMLAttributes } from "react";

export const Button = ({
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button
            className="text-white py-[0.5em] px-[2em] bg-gradient-to-r from-[#13ADC7] via-[#6978D1] to-[#945DD6] rounded-[1rem]"
            {...props}
        >
            {children}
        </button>
    );
};
