import { useContext } from "react";
import { Context } from "../../../pages/Landing";

const AboutMe = () => {
    const { aboutMeRef } = useContext(Context);

    return (
        <section className="h-[100vh] text-white" ref={aboutMeRef}>
            About
        </section>
    );
};

export default AboutMe;
