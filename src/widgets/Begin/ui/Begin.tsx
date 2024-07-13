import { Button } from "../../../shared/Button";
import { useRefsContext } from "../../../shared/contexts/RefsContext";

export const Begin = () => {
    const { aboutMeRef } = useRefsContext();

    const handleOnButtonClick = () => {
        aboutMeRef?.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="box-border px-[10%] py-24 flex flex-col gap-6 items-start">
            <h1 className="text-white text-4xl">
                Welcome everyone to my portfolio
            </h1>
            <p className="text-[#BCBCBC] text-base font-medium">
                Welcome again. There is going to be some text here.
            </p>
            <Button onClick={handleOnButtonClick}>Let's begin</Button>
        </section>
    );
};
