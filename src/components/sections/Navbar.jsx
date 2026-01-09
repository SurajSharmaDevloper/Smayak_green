import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "/logo.png";
import Input from "../base/Input";

const navItemClass = ({ isActive }) =>
  `flex items-center gap-2 font-medium transition
   ${isActive ? "text-green-600" : "text-text hover:text-green-600"}`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  /* CLOSE MOBILE MENU ON DESKTOP */
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
    <motion.nav
      className="w-full sticky top-0 z-50 bg-white border-b border-gray-200"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* ================= TOP BAR ================= */}
      <motion.div
        className="w-full bg-primary text-white text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <i className="fa-regular fa-handshake"></i>
            <span>Partner With Us</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:block">Follow Us:</span>
            {[
              "fa-facebook-f",
              "fa-twitter",
              "fa-youtube",
              "fa-linkedin-in",
            ].map((icon) => (
              <motion.i
                key={icon}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
                className={`fa-brands ${icon} cursor-pointer`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* ================= MAIN NAV ================= */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <NavLink to="/" className="flex flex-col items-center">
              <img src={Logo} alt="Logo" className="w-18" />
            </NavLink>
          </motion.div>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-8">
            {[
              { to: "/", icon: "fa-house", label: "Home" },
              { to: "/aboutus", icon: "fa-circle-info", label: "About Us" },
              {
                to: "/recipies_database",
                icon: "fa-database",
                label: "Recipes Database",
              },
              { to: "/homemade", icon: "fa-bowl-food", label: "Homemade" },
            ].map((item) => (
              <motion.li
                key={item.to}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <NavLink to={item.to} className={navItemClass}>
                  <i className={`fa-solid ${item.icon}`}></i> {item.label}
                </NavLink>
              </motion.li>
            ))}
          </ul>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-6 text-text">
            {/* SEARCH ICON */}
            <motion.button
              whileHover={{ scale: 1.15 }}
              onClick={() => setSearchOpen(!searchOpen)}
              className="hidden lg:block text-lg hover:text-green-600"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </motion.button>

            {/* CART */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative cursor-pointer"
            >
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                3
              </span>
            </motion.div>

            {/* MOBILE TOGGLE */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setMenuOpen(!menuOpen);
                setSearchOpen(false);
              }}
              className="lg:hidden text-2xl"
            >
              <i className="fa-solid fa-bars"></i>
            </motion.button>
          </div>
        </div>

        {/* ================= DESKTOP SEARCH ================= */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="hidden lg:block absolute left-0 top-full w-full bg-white shadow-md border-t border-green-200 z-40"
            >
              <div className="max-w-xl mx-auto px-6 py-4 flex gap-4">
                <Input placeholder="Search traditional recipes, ingredients, regions..." />
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg">
                  Search
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ================= MOBILE BACKDROP ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-28 z-40 bg-black"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden absolute top-full left-0 w-full z-50 bg-white border-t border-gray-200 shadow-md"
          >
            <div className="px-6 py-4 space-y-4">
              {/* MOBILE SEARCH */}
              <div className="flex gap-3">
                <Input placeholder="Search recipes, ingredients..." />
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
                  Go
                </button>
              </div>

              {/* LINKS */}
              <ul className="flex flex-col gap-4">
                {[
                  { to: "/", icon: "fa-house", label: "Home" },
                  { to: "/aboutus", icon: "fa-circle-info", label: "About Us" },
                  {
                    to: "/recipies_database",
                    icon: "fa-database",
                    label: "Recipes Database",
                  },
                  {
                    to: "/homemade",
                    icon: "fa-bowl-food",
                    label: "Homemade",
                  },
                ].map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setMenuOpen(false)}
                    className={navItemClass}
                  >
                    <i className={`fa-solid ${item.icon}`}></i> {item.label}
                  </NavLink>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
