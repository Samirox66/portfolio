import { useRefsContext } from "../../../shared/contexts/RefsContext";

const Projects = () => {
    const { projectsRef } = useRefsContext();

    return (
        <section className="h-[100vh] text-white" ref={projectsRef}>
            Proj
        </section>
    );
};

export default Projects;
