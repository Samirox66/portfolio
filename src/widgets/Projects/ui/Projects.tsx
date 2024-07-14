import { useRefsContext } from "../../../shared/contexts/RefsContext";
import { H2Title } from "../../../shared/H2Title/H2Title";
import { Project } from "./Project";

import inream from "../assets/ic_interactive_38x35.svg";
import eatly from "../assets/eatly.png";

const Projects = () => {
    const { projectsRef } = useRefsContext();

    return (
        <section className="px-[10%] flex flex-col gap-10" ref={projectsRef}>
            <H2Title>Projects</H2Title>
            <div className="flex justify-between flex-wrap">
                <Project
                    image={inream}
                    title="Inream"
                    description="chto-to"
                    href="https://inream.com/"
                />
                <Project
                    image={eatly}
                    title="Study project for T1 Holding"
                    description="esche"
                    href="https://samirox66.github.io/open-js-react-school/"
                />
            </div>
        </section>
    );
};

export default Projects;
