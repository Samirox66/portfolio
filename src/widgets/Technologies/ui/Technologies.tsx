import { useRefsContext } from "../../../shared/contexts/RefsContext";
import { H2Title } from "../../../shared/H2Title/H2Title";

const Technologies = () => {
    const { technologiesRef } = useRefsContext();

    return (
        <section className="text-white px-[10%]" ref={technologiesRef}>
            <H2Title>Technologies</H2Title>
        </section>
    );
};

export default Technologies;
