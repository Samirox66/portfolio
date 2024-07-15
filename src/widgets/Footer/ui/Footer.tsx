import { Contacts } from "../../../features/Contacts";

const Footer = () => {
    return (
        <footer className="mt-[100px] flex items-center justify-center gap-[25.7%] py-[5em]">
            <div className="text-white font-semibold text-[2.85rem]">
                <p>Email:</p>
                <p>samir1999358@gmail.com</p>
            </div>
            <Contacts size="big" />
        </footer>
    );
};

export default Footer;
