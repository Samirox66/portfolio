import { Fragment } from "react";
import { useRefsContext } from "../../../shared/contexts/RefsContext";
import { H2Title } from "../../../shared/H2Title/H2Title";
import { FormattedMessage } from "react-intl";

const eventsMeta = ["2019", "2020", "2021", "2022", "2024"];

const AboutMe = () => {
  const { aboutMeRef } = useRefsContext();

  const slicedEvents =
    window.innerWidth < 600
      ? [eventsMeta.slice(0, 3), eventsMeta.slice(3)]
      : [eventsMeta];

  return (
    <section className="px-[10%] flex flex-col items-center" ref={aboutMeRef}>
      <H2Title>
        <FormattedMessage id="landing_aboutMe" />
      </H2Title>
      {slicedEvents.map((events, index) => (
        <div
          key={index}
          className="grid grid-rows-3 grid-flow-col place-items-center relative auto-cols-fr w-full"
        >
          <div className="absolute w-[90%] bg-white h-3 rounded-md"></div>
          {events.map((event, index) => (
            <Fragment key={index}>
              <p className="text-white text-[2.25rem] self-end">{event}</p>
              <div className="w-[40px] h-[40px] rounded-[50%] bg-white"></div>
              <p className="text-white text-[1.75rem] self-start">
                <FormattedMessage id={`landing_event${event}`} />
              </p>
            </Fragment>
          ))}
        </div>
      ))}
    </section>
  );
};

export { AboutMe };
