import { useRefsContext } from "../../../shared/contexts/RefsContext";
import { H2Title } from "../../../shared/H2Title/H2Title";
import { Project } from "./Project";

import inream from "../assets/ic_interactive_38x35.svg";
import imream2 from "../assets/inream.png";
import eatly from "../assets/eatly.png";
import editor from "../assets/editor.png";
import { FormattedMessage } from "react-intl";

const Projects = () => {
  const { projectsRef } = useRefsContext();

  return (
    <section
      className="px-[10%] flex flex-col gap-10 items-center"
      ref={projectsRef}
    >
      <H2Title>
        <FormattedMessage id="landing_projects" />
      </H2Title>
      <div className="flex justify-evenly flex-wrap flex-1 gap-[40px]">
        <Project image={imream2} title="inream" href="https://inream.com/" />
        <Project
          image={editor}
          title="editor"
          href="https://lang.inream.com/editor"
        />
        <Project
          image={inream}
          title="duo"
          href="https://lang.inream.com/duo"
        />
        <Project
          image={eatly}
          title="eatly"
          href="https://samirox66.github.io/open-js-react-school/"
        />
      </div>
    </section>
  );
};

export default Projects;
