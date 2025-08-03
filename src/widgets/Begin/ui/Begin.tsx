import { Button } from "../../../shared/Button";
import { useRefsContext } from "../../../shared/contexts/RefsContext";
import drawing from "../assets/drawing.svg";

export const Begin = () => {
  const { aboutMeRef } = useRefsContext();

  const handleOnButtonClick = () => {
    aboutMeRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="box-border px-[10%] pt-24 flex flex-col gap-6 items-center relative">
      <img className="absolute right-0 top-3 max-w-[600px]" src={drawing} />
      <h1 className="text-white text-[4rem] font-bold">
        Welcome everyone to my portfolio
      </h1>
      <p className="text-[#BCBCBC] text-[2.24rem] font-medium w-1/2">
        Welcome again. There is going to be some text here. with a lot of
        symbols uhuuuu
      </p>
      <Button onClick={handleOnButtonClick}>Let's begin</Button>
    </section>
  );
};
