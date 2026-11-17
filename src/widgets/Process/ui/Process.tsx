import { FormattedMessage } from "react-intl";
import { useRefsContext } from "../../../shared/contexts/RefsContext";
import { H2Title } from "../../../shared/H2Title/H2Title";

const steps = ["1", "2", "3", "4"];

const Process = () => {
  const { processRef } = useRefsContext();

  return (
    <section
      className="px-[10%] flex flex-col gap-10 items-center"
      ref={processRef}
    >
      <H2Title>
        <FormattedMessage id="landing_process" />
      </H2Title>
      <div className="flex justify-evenly flex-wrap flex-1 gap-[40px]">
        {steps.map((step) => (
          <div
            key={step}
            className="animation_600 flex flex-col gap-4 flex-grow max-w-[400px] min-w-[260px] w-[22%] text-center"
          >
            <p className="text-[1.5rem] font-semibold bg-gradient-to-r from-[#13ADC7] via-[#6978D1] to-[#945DD6] bg-clip-text text-transparent">
              {step}
            </p>
            <h4 className="text-white text-[2rem] font-semibold">
              <FormattedMessage id={`landing_process_step${step}_title`} />
            </h4>
            <p className="text-[#BCBCBC] text-[1.5rem]">
              <FormattedMessage id={`landing_process_step${step}_desc`} />
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
