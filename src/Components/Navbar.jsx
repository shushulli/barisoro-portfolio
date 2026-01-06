import { Link, useNavigate } from "react-router-dom";
import pfp from '../assets/images/pfp.png'
// Navbar component
export const Navbar = ({ navStatus, setStatus }) => {
  const navigate = useNavigate();

  const enterSite = () => {
    navigate("/"); // refreshes the page when called
  };
  return (
    <nav className="sticky top-0 bg-slate-900 text-white p-2 border-fuchsia-500 border-b-2 z-50 overflow-hidden rounded-xl mx-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex gap-x-3 jusify-center items-center">

            <img src={pfp} className="size-10 rounded-full hover:animate-spin"onClick={enterSite}>
            </img>
            <p className="text-2xl font-bold font-sans">Shulli.exe</p>

            </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            <Link
              to="/aboutme"
              className="px-3 py-1 hover:shadow-md hover:shadow-fuchsia-800 transition-shadow hover:font-semibold hover:text-pink-500"
            >
              About Me
            </Link>
            <Link
              to="/projects"
              className="px-3 py-1 hover:shadow-md hover:shadow-fuchsia-800 transition-shadow hover:font-semibold hover:text-pink-500"
            >
              Projects
            </Link>
            <button
  onClick={() => {
    const footer = document.getElementById("contact");
    footer?.scrollIntoView({ behavior: "smooth" });
  }}
  className="px-3 py-1 hover:shadow-md hover:shadow-fuchsia-800 transition-shadow hover:font-semibold hover:text-pink-500"
>
  Contact Me
</button>

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setStatus(!navStatus)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu  */}
      <div
        className={`${navStatus ? "block" : "hidden"} md:hidden bg-slate-800 px-4 pb-4 text-center`}
      >
        <Link to="/aboutme" className="block py-2 hover:bg-fuchsia-950">
          About Me
        </Link>
        <Link to="/projects" className="block py-2 hover:bg-fuchsia-950">
          Projects
        </Link>
        <Link to="/contact" className="block py-2 hover:bg-fuchsia-950">
          Contact Me
        </Link>
      </div>
    </nav>
  );
};
