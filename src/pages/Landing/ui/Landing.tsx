import { LangIntlProvider } from "../../../app/providers/LangIntlProvider";
import { RefsProvider } from "../../../app/providers/RefsProvider";
import { AboutMe } from "../../../widgets/AboutMe";
import { Begin } from "../../../widgets/Begin";
import { Footer } from "../../../widgets/Footer";
import { Header } from "../../../widgets/Header";
import { Process } from "../../../widgets/Process";
import { Projects } from "../../../widgets/Projects";
import { Technologies } from "../../../widgets/Technologies";

const Landing = () => {
  return (
    <LangIntlProvider>
      <RefsProvider>
        <Header />
        <main className="flex flex-col gap-32">
          <Begin />
          <AboutMe />
          <Projects />
          <Process />
          <Technologies />
        </main>
        <Footer />
      </RefsProvider>
    </LangIntlProvider>
  );
};

export { Landing };
