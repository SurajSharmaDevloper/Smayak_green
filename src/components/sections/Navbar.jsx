import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "/NoBack_Logo.png";

const navItemClass = ({ isActive }) =>
  `relative flex items-center gap-2 cursor-pointer transition
   after:content-[''] after:absolute after:left-0 after:bottom-0
   after:h-[2px] after:bg-primary after:transition-all after:duration-300
   ${
     isActive
       ? "text-primary after:w-full"
       : "text-text after:w-0 hover:after:w-full hover:text-primary"
   }`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Top Info Bar */}
      <div className="w-full flex items-center justify-between px-10 py-2 bg-primary text-white text-sm">
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1">
            <i className="fa-regular fa-envelope"></i>
            <p className="hidden sm:block">support@sansiddhi.co.in</p>
          </span>
          <span className="flex items-center gap-1">
            <i className="fa-solid fa-phone"></i>
            <p className="hidden sm:block">+91-9899210941</p>
          </span>
        </div>
        <a className="font-semibold underline hover:text-gray-200" href="#">
          Partner With Us
        </a>
      </div>

      {/* Main Navbar */}
      <div className="w-[95%] mx-auto flex items-center justify-between py-2">
        {/* Logo */}
        <div className="">
          <NavLink to="/" className="flex flex-col items-center">
            <img src={Logo} className="w-24" alt="Sansiddhi Logo" />
            <div className="font-[Pacifico] -mt-3 ps-3">
              <span className="font-semibold text-md text-text">Samayak </span>
              <span className="text-green-500/70 -mt-1.5 font-semibold text-md">
                Green
              </span>
            </div>
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8 font-medium">
            <li>
              <NavLink to="/" className={navItemClass}>
                <i className="fa-solid fa-house text-xs"></i>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/aboutus" className={navItemClass}>
                <i className="fa-solid fa-circle-info text-sm"></i>
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/recipies_database" className={navItemClass}>
                <i class="fa-solid fa-database"></i>
                Recipes Databases
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={navItemClass}>
                <i class="fa-solid fa-bowl-food"></i>
                Homemade
              </NavLink>
            </li>
          </ul>

          {/* Auth Buttons */}
          <div className="flex items-center">
            <NavLink
              to="/signup"
              className="bg-primary text-white px-3 py-1.5 rounded-l-lg hover:bg-secondary"
            >
              Sign Up
            </NavLink>
            <NavLink
              to="/login"
              className="bg-secondary text-white px-3 py-1.5 rounded-r-lg hover:opacity-90"
            >
              Login
            </NavLink>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-text"
          aria-label="Toggle menu"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col p-4 gap-4 font-medium">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/aboutus" },
              { name: "Engagement", path: "/engagement" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "text-primary font-semibold" : "text-text"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            <div className="flex mt-4">
              <NavLink
                to="/signup"
                className="bg-primary text-white px-4 py-2 rounded-l-lg w-1/2 text-center"
              >
                Sign Up
              </NavLink>
              <NavLink
                to="/login"
                className="bg-secondary text-white px-4 py-2 rounded-r-lg w-1/2 text-center"
              >
                Login
              </NavLink>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
