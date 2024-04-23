import { useContext } from "react";
import { Context } from "../../../pages/Landing";
import AnchorLink from "../../../shared/AnchorLink/ui/AnchorLink";

const NavBar = () => {
    const refs = useContext(Context);

    return (
        <section>
            <AnchorLink scrollRef={refs.aboutMeRef}>
                <a>About me</a>
            </AnchorLink>
            <AnchorLink scrollRef={refs.projectsRef}>
                <a>Projects</a>
            </AnchorLink>
            <AnchorLink scrollRef={refs.technologiesRef}>
                <a>Technologies</a>
            </AnchorLink>
        </section>
    );
};

export default NavBar;
