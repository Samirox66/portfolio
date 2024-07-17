import github from "../../assets/github.svg";
import telegram from "../../assets/telegram.svg";
import linkedin from "../../assets/Linkedin.svg";
import { Contact } from "../Contact/Contact";

interface ContactsProps {
    size: "small" | "big";
}

const Contacts = ({ size }: ContactsProps) => {
    const media = size == "small" ? "max-[500px]:flex-col" : "";
    return (
        <section className={`flex items-center gap-5 ${media}`}>
            <Contact
                href="https://github.com/Samirox66"
                logo={github}
                size={size}
            />
            <Contact
                href="https://www.linkedin.com/in/samir-bairamov-46595421a/"
                logo={linkedin}
                size={size}
            />
            <Contact
                href="https://t.me/samirox66"
                logo={telegram}
                size={size}
            />
        </section>
    );
};

export default Contacts;
