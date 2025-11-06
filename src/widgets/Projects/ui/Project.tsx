import { FormattedMessage } from "react-intl";

interface ProjectProps {
  image: string;
  title: string;
  href: string;
}

export const Project = ({ image, title, href }: ProjectProps) => {
  return (
    <section className="animation_600 flex flex-col flex-grow max-w-[600px] min-w-[300px] items-center justify-between gap-6 p-6 shadow-[0_0_12px_0_white] w-[45%] rounded-br-[50px] rounded-tl-[50px]">
      <img className="bg-white w-full h-[40%]" src={image} />
      <h4 className="text-white text-4xl text-center font-semibold">
        <FormattedMessage id={`landing_project_header_${title}`} />
      </h4>
      <div className="bg-gradient-to-r from-[#13ADC7] via-[#6978D1] to-[#945DD6] w-[50%] h-[4px]"></div>
      <p className="text-white text-[1.75rem] text-center w-full font-semibold">
        <FormattedMessage id={`landing_project_desc_${title}`} />
      </p>
      <a
        className={
          "text-white py-[0.5em] px-[2em] bg-gradient-to-r from-[#13ADC7] via-[#6978D1] to-[#945DD6] rounded-[3rem] font-medium text-[1.2rem]" +
          " hover:opacity-90"
        }
        href={href}
        target="_blank"
      >
        <FormattedMessage id="landing_project_look" />
      </a>
    </section>
  );
};
