import { PropsWithChildren, useRef } from "react";
import { RefsContext } from "../../shared/contexts/RefsContext";

export const RefsProvider = ({ children }: PropsWithChildren) => {
    const aboutMeRef = useRef(null);
    const projectsRef = useRef(null);
    const processRef = useRef(null);
    const technologiesRef = useRef(null);

    return (
        <RefsContext.Provider
            value={{ aboutMeRef, projectsRef, processRef, technologiesRef }}
        >
            {children}
        </RefsContext.Provider>
    );
};
