import { useEffect } from "react";

export const NavBar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-gradient-to-r from-[#13131a] via-[#181824] to-[#13131a] backdrop-blur-lg shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a
            href="#about"
            className="font-mono text-xl font-bold text-white"
          >
            {" "}
            AATHITHYA <span className="text-indigo-300">ANANTH</span>
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-300 hover:text-indigo-200 transition-all font-mono text-s font-bold
                                   hover:[text-shadow:_0_0_8px_rgba(165,180,252,0.9),_0_0_16px_rgba(99,102,241,0.7)]"
            >
              About
            </a>

            <a
              href="#projects"
              className="text-gray-300 hover:text-indigo-200 transition-all font-mono text-s font-bold
                                   hover:[text-shadow:_0_0_8px_rgba(165,180,252,0.9),_0_0_16px_rgba(99,102,241,0.7)]"
            >
              Projects
            </a>

            <a
              href="#skills"
              className="text-gray-300 hover:text-indigo-200 transition-all font-mono text-s font-bold
                                   hover:[text-shadow:_0_0_8px_rgba(165,180,252,0.9),_0_0_16px_rgba(99,102,241,0.7)]"
            >
              Skills
            </a>

            <a
              href="#resume"
              className="text-gray-300 hover:text-indigo-200 transition-all font-mono text-s font-bold
                                   hover:[text-shadow:_0_0_8px_rgba(165,180,252,0.9),_0_0_16px_rgba(99,102,241,0.7)]"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};