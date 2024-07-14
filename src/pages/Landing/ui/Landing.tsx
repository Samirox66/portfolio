import { RefsProvider } from "../../../app/providers/RefsProvider";
import { AboutMe } from "../../../widgets/AboutMe";
import { Begin } from "../../../widgets/Begin";
import { Footer } from "../../../widgets/Footer";
import { Header } from "../../../widgets/Header";
import { Projects } from "../../../widgets/Projects";
import { Technologies } from "../../../widgets/Technologies";

const Landing = () => {
    return (
        <RefsProvider>
            <Header />
            <main className="flex flex-col gap-32">
                <Begin />
                <AboutMe />
                <Projects />
                <Technologies />
            </main>
            <Footer />
        </RefsProvider>
    );
};

export { Landing };
