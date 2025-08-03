import { useRefsContext } from "../../../shared/contexts/RefsContext";
import { H2Title } from "../../../shared/H2Title/H2Title";

interface ITechnologies {
  name: string;
  type: "Advanced" | "Regular" | "Beginner";
}

const technologiesMeta: ITechnologies[] = [
  {
    name: "HTML",
    type: "Advanced",
  },
];

const Technologies = () => {
  const { technologiesRef } = useRefsContext();

  const technologies = technologiesMeta.map((technology, index) => {
    let length = "w-[75%]";
    if (technology.type == "Beginner") {
      length = "w-[50%]";
    } else if (technology.type == "Regular") {
      length = "w-[25%]";
    }

    return (
      <div key={index} className="w-full flex flex-col items-center">
        <div className="flex justify-between items-end w-[90%]">
          <p className="text-[2.25rem]">{technology.name}</p>
          <p className="text-[1.5rem]">{technology.type}</p>
        </div>
        <div className="w-full bg-[#162950] rounded-[83px] h-[32px]">
          <div
            className={`${length} rounded-[83px] h-full bg-gradient-to-r from-[#13ADC7] via-[#6978D1] to-[#945DD6]`}
          ></div>
        </div>
      </div>
    );
  });

  return (
    <section
      className="text-white px-[10%] flex flex-col gap-[40px] items-center"
      ref={technologiesRef}
    >
      <H2Title>Technologies</H2Title>
      <section className="flex flex-col w-full items-center gap-[54px]">
        {technologies}
      </section>
    </section>
  );
};

export default Technologies;
