import { useRefsContext } from "../../../shared/contexts/RefsContext";
import { H2Title } from "../../../shared/H2Title/H2Title";
import { Project } from "./Project";

import telegram from "../../../features/Contacts/assets/telegram.svg";

const Projects = () => {
    const { projectsRef } = useRefsContext();

    return (
        <section className="px-[10%] flex flex-col gap-10" ref={projectsRef}>
            <H2Title>Projects</H2Title>
            <div>
                <Project
                    image={telegram}
                    title="Inream"
                    description="chto-to"
                    href="https://lang.inream.com/"
                />
            </div>
        </section>
    );
};

export default Projects;
