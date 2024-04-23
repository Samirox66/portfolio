import { AboutMe } from "../../../widgets/AboutMe";
import { Footer } from "../../../widgets/Footer";
import { Header } from "../../../widgets/Header";
import { Projects } from "../../../widgets/Projects";
import { Technologies } from "../../../widgets/Technologies";
import { useRef, MutableRefObject, createContext, createRef } from "react";

type TContext = {
    aboutMeRef: MutableRefObject<HTMLElement | null>;
    projectsRef: MutableRefObject<HTMLElement | null>;
    technologiesRef: MutableRefObject<HTMLElement | null>;
};
export const Context = createContext<TContext>({
    aboutMeRef: createRef(),
    projectsRef: createRef(),
    technologiesRef: createRef(),
});

const Landing = () => {
    const aboutMeRef = useRef(null);
    const projectsRef = useRef(null);
    const technologiesRef = useRef(null);

    return (
        <Context.Provider value={{ aboutMeRef, projectsRef, technologiesRef }}>
            <Header />
            <main>
                <AboutMe />
                <Projects />
                <Technologies />
            </main>
            <Footer />
        </Context.Provider>
    );
};

export default Landing;
