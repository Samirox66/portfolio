import { FormattedMessage } from "react-intl";
import { Contacts } from "../../../features/Contacts";

const Footer = () => {
  return (
    <footer className="mt-[100px] flex items-center justify-evenly gap-[40px] py-[5em] max-[600px]:flex-col">
      <div className="text-white font-semibold text-[2.85rem] max-[700px]:text-[2rem]">
        <p>
          <FormattedMessage id="landing_email" />:
        </p>
        <p>samir1999358@gmail.com</p>
      </div>
      <Contacts size="big" />
    </footer>
  );
};

export default Footer;
