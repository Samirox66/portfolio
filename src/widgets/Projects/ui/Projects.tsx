import { useContext } from "react";
import { Context } from "../../../pages/Landing";

const Projects = () => {
    const { projectsRef } = useContext(Context);

    return (
        <section className="h-[100vh] text-white" ref={projectsRef}>
            Proj
        </section>
    );
};

export default Projects;
