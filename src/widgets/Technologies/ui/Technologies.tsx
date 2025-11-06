import { FormattedMessage } from "react-intl";
import { useRefsContext } from "../../../shared/contexts/RefsContext";
import { H2Title } from "../../../shared/H2Title/H2Title";

interface ITechnologies {
  name: string;
  type: "Advanced" | "Intermediate" | "Beginner";
  percent: number;
}

const technologiesMeta: ITechnologies[] = [
  {
    name: "HTML/CSS",
    type: "Advanced",
    percent: 95,
  },
  {
    name: "React",
    type: "Advanced",
    percent: 95,
  },
  {
    name: "Typescript",
    type: "Advanced",
    percent: 95,
  },
  {
    name: "Next.js",
    type: "Advanced",
    percent: 75,
  },
];

const Technologies = () => {
  const { technologiesRef } = useRefsContext();

  const technologies = technologiesMeta.map((technology, index) => (
    <div
      key={index}
      className="animation_300 w-full flex flex-col items-center"
    >
      <div className="flex justify-between items-end w-[90%]">
        <p className="text-[2.25rem]">{technology.name}</p>
        <p className="text-[1.5rem]">
          <FormattedMessage id={`landing_techilogies_${technology.type}`} />
        </p>
      </div>
      <div className="w-full bg-[#162950] rounded-[83px] h-[32px]">
        <div
          style={{ width: `${technology.percent}%` }}
          className="rounded-[83px] h-full bg-gradient-to-r from-[#13ADC7] via-[#6978D1] to-[#945DD6]"
        />
      </div>
    </div>
  ));

  return (
    <section
      className="text-white px-[10%] flex flex-col gap-[40px] items-center"
      ref={technologiesRef}
    >
      <H2Title>
        <FormattedMessage id="landing_technologies" />
      </H2Title>
      <section className="flex flex-col w-full items-center gap-[54px]">
        {technologies}
      </section>
    </section>
  );
};

export default Technologies;
