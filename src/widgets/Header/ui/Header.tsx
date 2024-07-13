import { Contacts } from "../../../features/Contacts";
import { AnchorLink } from "../../../shared/AnchorLink";
import { Logo } from "../../../shared/Logo";
import { useRefsContext } from "../../../shared/contexts/RefsContext";

const Header = () => {
    const refs = useRefsContext();

    return (
        <header className="w-full flex justify-between px-[6.8%] py-[2.3%] box-border">
            <div className="flex items-center gap-[12px]">
                <Logo />
                <p className="text-white font-semibold">Portfolio</p>
            </div>
            <section className="flex items-center justify-between w-[30%] gap-5">
                <AnchorLink scrollRef={refs.aboutMeRef}>
                    <a className="text-white font-medium">About me</a>
                </AnchorLink>
                <AnchorLink scrollRef={refs.projectsRef}>
                    <a className="text-white font-medium">Projects</a>
                </AnchorLink>
                <AnchorLink scrollRef={refs.technologiesRef}>
                    <a className="text-white font-medium">Technologies</a>
                </AnchorLink>
            </section>
            <Contacts />
        </header>
    );
};

export default Header;
