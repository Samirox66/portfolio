import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <section className="flex justify-between items-center w-[50vw]">
      <Link className="no-underline" to="packages">
        Packages
      </Link>
    </section>
  );
};

export default NavBar;
