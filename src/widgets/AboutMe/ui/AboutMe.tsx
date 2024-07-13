import { useRefsContext } from "../../../shared/contexts/RefsContext";

const AboutMe = () => {
    const { aboutMeRef } = useRefsContext();

    return (
        <section className="h-[100vh] text-white" ref={aboutMeRef}>
            About
        </section>
    );
};

export { AboutMe };
