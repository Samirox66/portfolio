import { Link } from "react-router-dom";
import { NavBar } from "../../../features";

const Header = () => {
  return (
    <header className="h-[10vh] w-[100vw] bg-blue-300">
      <section className="p-2 h-full flex items-center justify-between">
        <Link to="">Samiracle</Link>
        <NavBar />
      </section>
    </header>
  );
};

export default Header;
