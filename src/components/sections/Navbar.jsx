import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "/logo.png";
import Input from "../base/Input"; // adjust path if needed

const navItemClass = ({ isActive }) =>
  `flex items-center gap-2 font-medium transition
   ${isActive ? "text-green-600" : "text-text hover:text-green-600"}`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Close mobile menu when switching to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="w-full sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* ================= TOP BAR ================= */}
      <div className="w-full bg-primary text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <i className="fa-regular fa-handshake"></i>
            <span>Partner With Us</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:block">Follow Us:</span>
            <i className="fa-brands fa-facebook-f cursor-pointer"></i>
            <i className="fa-brands fa-twitter cursor-pointer"></i>
            <i className="fa-brands fa-youtube cursor-pointer"></i>
            <i className="fa-brands fa-linkedin-in cursor-pointer"></i>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAV ================= */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex flex-col items-center">
            <img src={Logo} alt="Logo" className="w-20" />
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            <li>
              <NavLink to="/" className={navItemClass}>
                <i className="fa-solid fa-house"></i> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutus" className={navItemClass}>
                <i className="fa-solid fa-circle-info"></i> About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/recipies_database" className={navItemClass}>
                <i className="fa-solid fa-database"></i> Recipes Database
              </NavLink>
            </li>
            <li>
              <NavLink to="/homemade" className={navItemClass}>
                <i className="fa-solid fa-bowl-food"></i> Homemade
              </NavLink>
            </li>
          </ul>

          {/* Right Icons */}
          <div className="flex items-center gap-6 text-text">
            {/* Desktop Search Icon */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="hidden lg:block text-lg hover:text-green-600"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>

            {/* Cart */}
            <div className="relative cursor-pointer">
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                3
              </span>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => {
                setMenuOpen(!menuOpen);
                setSearchOpen(false); // close desktop search
              }}
              className="lg:hidden text-2xl"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>

        {/* ================= DESKTOP SEARCH DROPDOWN ================= */}
        {searchOpen && (
          <div className="hidden lg:block absolute left-0 top-full w-full bg-white shadow-md border-t border-green-200 z-40">
            <div className="max-w-xl mx-auto px-6 py-4 flex gap-4">
              <Input placeholder="Search traditional recipes, ingredients, regions..." />
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg">
                Search
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ================= MOBILE MENU ================= */}
      {/* ================= CLICK OUTSIDE BACKDROP ================= */}
      {menuOpen && (
        <div
          className="fixed inset-0 top-28 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full z-50 bg-white border-t border-gray-200 shadow-md">
          <div
            className="px-6 py-4 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Search */}
            <div className="flex gap-3">
              <Input placeholder="Search recipes, ingredients..." />
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
                Go
              </button>
            </div>

            {/* Links */}
            <ul className="flex flex-col gap-4">
              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className={navItemClass}
              >
                <i className="fa-solid fa-house"></i> Home
              </NavLink>
              <NavLink
                to="/aboutus"
                onClick={() => setMenuOpen(false)}
                className={navItemClass}
              >
                <i className="fa-solid fa-circle-info"></i> About Us
              </NavLink>
              <NavLink
                to="/recipies_database"
                onClick={() => setMenuOpen(false)}
                className={navItemClass}
              >
                <i className="fa-solid fa-database"></i> Recipes Database
              </NavLink>
              <NavLink
                to="/homemade"
                onClick={() => setMenuOpen(false)}
                className={navItemClass}
              >
                <i className="fa-solid fa-bowl-food"></i> Homemade
              </NavLink>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
