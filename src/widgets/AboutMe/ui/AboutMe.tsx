import { Fragment } from "react";
import { useRefsContext } from "../../../shared/contexts/RefsContext";
import { H2Title } from "../../../shared/H2Title/H2Title";
import { FormattedMessage } from "react-intl";

interface Event {
  year: string;
  value: string;
}

const eventsMeta: Event[] = [
  { year: "2019", value: "I was " },
  { year: "2020", value: "Polytech" },
  { year: "2021", value: "Frontend" },
  { year: "2022", value: "Inream" },
  { year: "2024", value: "Gazprom CPS" },
];

const AboutMe = () => {
  const { aboutMeRef } = useRefsContext();

  const events = eventsMeta.map((event, index) => (
    <Fragment key={index}>
      <p className="text-white text-[2.25rem] self-end">{event.year}</p>
      <div className="w-[40px] h-[40px] rounded-[50%] bg-white"></div>
      <p className="text-white text-[1.75rem] self-start">{event.value}</p>
    </Fragment>
  ));

  return (
    <section className="px-[10%] flex flex-col items-center" ref={aboutMeRef}>
      <H2Title>
        <FormattedMessage id="landing_aboutMe" />
      </H2Title>
      <div className="grid grid-rows-3 grid-flow-col place-items-center relative auto-cols-fr w-full">
        <div className="absolute w-[90%] bg-white h-3 rounded-md"></div>
        {events}
      </div>
    </section>
  );
};

export { AboutMe };
