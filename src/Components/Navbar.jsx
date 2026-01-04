import { Link } from "react-router-dom";

export const Navbar = ({ navStatus, setStatus }) => {
  return (
    <nav className="sticky top-0 bg-slate-900 text-white p-2 border-fuchsia-500 border-b-2 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold font-sans">S h u l l i.exe</div>

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
            <Link
              to="/contact"
              className="px-3 py-1 hover:shadow-md hover:shadow-fuchsia-800 transition-shadow hover:font-semibold hover:text-pink-500"
            >
              Contact Me
            </Link>
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

      {/* Mobile Menu */}
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
