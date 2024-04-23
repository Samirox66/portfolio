import { useContext } from "react";
import { Context } from "../../../pages/Landing";

const Technologies = () => {
    const { technologiesRef } = useContext(Context);

    return (
        <section className="h-[100vh] text-white" ref={technologiesRef}>
            Tech
        </section>
    );
};

export default Technologies;
