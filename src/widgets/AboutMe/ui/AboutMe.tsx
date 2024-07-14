import { Fragment } from "react";
import { useRefsContext } from "../../../shared/contexts/RefsContext";
import { H2Title } from "../../../shared/H2Title/H2Title";

interface Event {
    year: string;
    value: string;
}

const eventsMeta: Event[] = [
    { year: "2019", value: "op" },
    { year: "2020", value: "gop" },
];

const AboutMe = () => {
    const { aboutMeRef } = useRefsContext();

    const events = eventsMeta.map((event, index) => (
        <Fragment key={index}>
            <p className="text-white">{event.year}</p>
            <div className="w-[40px] h-[40px] rounded-[50%] bg-white"></div>
            <p className="text-white">{event.value}</p>
        </Fragment>
    ));

    return (
        <section className="px-[10%]" ref={aboutMeRef}>
            <H2Title>About me</H2Title>
            <div className="grid grid-rows-3 grid-flow-col place-items-center relative">
                <div className="absolute w-full bg-white h-3 rounded-md"></div>
                {events}
            </div>
        </section>
    );
};

export { AboutMe };
