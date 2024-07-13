import { useRefsContext } from "../../../shared/contexts/RefsContext";

const Technologies = () => {
    const { technologiesRef } = useRefsContext();

    return (
        <section className="h-[100vh] text-white" ref={technologiesRef}>
            Tech
        </section>
    );
};

export default Technologies;
