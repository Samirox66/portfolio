import { Contacts } from "../../../features/Contacts";
import { NavBar } from "../../../features/NavBar";
import { Logo } from "../../../shared/Logo";

const Header = () => {
    return (
        <header className="h-[10vh] w-[100vw]">
            <Logo />
            <NavBar />
            <Contacts />
        </header>
    );
};

export default Header;
