import github from "../../assets/github.svg";
import telegram from "../../assets/telegram.svg";
import linkedin from "../../assets/Linkedin.svg";
import { Contact } from "../Contact/Contact";

const Contacts = () => {
    return (
        <section className="flex items-center gap-5">
            <Contact href="https://github.com/Samirox66" logo={github} />
            <Contact
                href="https://www.linkedin.com/in/samir-bairamov-46595421a/"
                logo={linkedin}
            />
            <Contact href="https://t.me/samirox66" logo={telegram} />
        </section>
    );
};

export default Contacts;
