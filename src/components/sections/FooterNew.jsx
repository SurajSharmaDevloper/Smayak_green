import React from "react";
import { motion } from "framer-motion";
import LocationMap from "../blocks/LocationMap";

const FooterNew = () => {
  return (
    <motion.footer
      className="bg-secondary p-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* BRAND + SUBSCRIBE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full p-5"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-24 w-24 rounded-full bg-white flex items-center justify-center">
              <img src="/logo.png" alt="Samyak Green Logo" />
            </div>
          </div>

          <p className="text-sm text-gray-200 leading-relaxed mb-6">
            Samyak green serves authentic traditional food crafted with care,
            quality ingredients, and time-tested recipes—bringing taste, trust,
            and tradition to every meal.
          </p>

          {/* SUBSCRIBE */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="flex w-full max-w-sm"
          >
            <input
              type="email"
              placeholder="Type email"
              className="w-full rounded-l-xl border border-gray-300 px-4 py-2 text-sm
                         outline-none focus:ring-2 focus:ring-[#35B357]
                         placeholder:text-gray-300"
            />
            <button
              className="rounded-r-xl bg-[#35B357] px-5 text-sm font-medium text-white
                         hover:bg-[#2fa14f] transition"
            >
              Subscribe
            </button>
          </motion.div>
        </motion.div>

        {/* NAVIGATION + SUPPORT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex w-full pt-10 max-[600px]:pt-0 justify-around flex-wrap">
            {/* NAVIGATION */}
            <div>
              <h4 className="text-sm font-semibold text-gray-100 mb-4">
                Navigation
              </h4>
              <ul className="space-y-3 text-sm text-gray-300">
                {["Home", "About", "Recipies Databases", "Home Made"].map(
                  (item) => (
                    <li key={item}>
                      <motion.a
                        href="#"
                        whileHover={{ x: 6 }}
                        transition={{ duration: 0.2 }}
                        className="hover:text-[#35B357] transition flex items-center gap-2"
                      >
                        <span className="text-[#35B357]">›</span>
                        {item}
                      </motion.a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* SUPPORT */}
            <div>
              <h4 className="text-sm font-semibold text-gray-100 mb-4">
                Support
              </h4>
              <ul className="space-y-3 text-sm text-gray-300">
                {[
                  "Contact Us",
                  "Get In Quote",
                  "Terms of Services",
                  "Privacy Policy",
                ].map((item) => (
                  <li key={item}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 6 }}
                      transition={{ duration: 0.2 }}
                      className="hover:text-[#35B357] transition flex items-center gap-2"
                    >
                      <span className="text-[#35B357]">›</span>
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* SOCIAL */}
            <div className="w-full mt-8 flex justify-center flex-col max-[1150px]:items-center">
              <h4 className="text-sm font-semibold text-center text-gray-100 mb-4">
                Our Social Media's
              </h4>
              <div className="text-2xl text-gray-200 flex gap-10 justify-center">
                {[
                  "fa-facebook",
                  "fa-linkedin",
                  "fa-square-x-twitter",
                  "fa-instagram",
                ].map((icon) => (
                  <motion.i
                    key={icon}
                    whileHover={{ scale: 1.25, color: "#35B357" }}
                    transition={{ type: "spring", stiffness: 260, damping: 15 }}
                    className={`fa-brands ${icon} cursor-pointer`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* MAP + CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-1"
        >
          <LocationMap />

          <div className="space-y-3 mt-5 text-sm text-gray-300">
            <p>
              <span className="font-medium text-gray-100">Location:</span>{" "}
              Delhi, Mumbai, Gurugram, Faridabad, Lucknow, Kolkata
            </p>

            <p>
              <span className="font-medium text-gray-100">Tel:</span>{" "}
              <a
                href="tel:+91-98XXXX0956"
                className="text-[#35B357] font-semibold"
              >
                +91-98XXXX1041
              </a>
            </p>

            <p>
              <span className="font-medium text-gray-100">Email:</span>{" "}
              <a
                href="mailto:support@samyakgreen.co.in"
                className="text-[#35B357] font-semibold"
              >
                support@samyakgreen.co.in
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default FooterNew;
