import { FormattedMessage } from "react-intl";
import { Button } from "../../../shared/Button";
import { useRefsContext } from "../../../shared/contexts/RefsContext";
import drawing from "../assets/drawing.svg";
import me from "../assets/me.jpeg";

export const Begin = () => {
  const { aboutMeRef } = useRefsContext();

  const handleOnButtonClick = () => {
    aboutMeRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="box-border px-[10%] pt-24 flex flex-col gap-6 items-center relative">
      <img className="absolute right-0 top-3 max-w-[600px]" src={drawing} />
      <h1 className="text-white text-[4rem] font-bold">
        <FormattedMessage id="landing_header" />
      </h1>
      <div className="flex gap-[40px] align-center">
        <img src={me} className="rounded-[1em]" style={{ maxWidth: 400 }} />
        <p className="text-[#BCBCBC] text-[2.24rem] font-medium w-1/2">
          <FormattedMessage id="landing_description" />
        </p>
      </div>
      <Button onClick={handleOnButtonClick}>
        <FormattedMessage id="landing_begin" />
      </Button>
    </section>
  );
};
