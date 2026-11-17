import { FormattedMessage } from "react-intl";
import { Contacts } from "../../../features/Contacts";
import { Button } from "../../../shared/Button";
import { H2Title } from "../../../shared/H2Title/H2Title";

const Footer = () => {
  return (
    <footer className="mt-[100px] flex flex-col items-center gap-[60px] py-[5em] px-[10%]">
      <div className="flex flex-col items-center gap-6 text-center">
        <H2Title>
          <FormattedMessage id="landing_footer_header" />
        </H2Title>
        <p className="text-[#BCBCBC] text-[1.9rem] font-medium">
          <FormattedMessage id="landing_footer_subcopy" />
        </p>
        <Button
          onClick={() =>
            (window.location.href = "mailto:samir1999358@gmail.com")
          }
        >
          <FormattedMessage id="landing_footer_cta" />
        </Button>
      </div>
      <div className="flex items-center justify-evenly gap-[40px] w-full max-[600px]:flex-col">
        <div className="text-white font-semibold text-[2.85rem] max-[700px]:text-[2rem]">
          <p>
            <FormattedMessage id="landing_email" />:
          </p>
          <p>samir1999358@gmail.com</p>
        </div>
        <Contacts size="big" />
      </div>
    </footer>
  );
};

export default Footer;
