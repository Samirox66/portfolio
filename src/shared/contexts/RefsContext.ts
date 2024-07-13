import { createContext, createRef, MutableRefObject, useContext } from "react";

type TContext = {
    aboutMeRef: MutableRefObject<HTMLElement | null>;
    projectsRef: MutableRefObject<HTMLElement | null>;
    technologiesRef: MutableRefObject<HTMLElement | null>;
};
export const RefsContext = createContext<TContext>({
    aboutMeRef: createRef(),
    projectsRef: createRef(),
    technologiesRef: createRef(),
});

export const useRefsContext = () => {
    return useContext(RefsContext);
};
