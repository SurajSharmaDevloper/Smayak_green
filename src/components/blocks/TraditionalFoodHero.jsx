import { motion } from "framer-motion";
import heroFood from "../../assets/Foods/IlishMash.png";

const leftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const rightVariants = {
  hidden: { opacity: 0, x: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const TraditionalFoodHero = () => {
  return (
    <section className="relative w-full min-h-105 lg:min-h-130 lg:max-h-100 overflow-hidden bg-black">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-green-900/70" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* LEFT CONTENT */}
        <motion.div
          variants={leftVariants}
          initial="hidden" // reload animation
          whileInView="visible" // scroll animation
          viewport={{ once: false, amount: 0.4 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Today’s Special
          </h1>

          <p className="text-orange-400 font-semibold mt-4">
            Know about origins, health benefits
          </p>

          <p className="text-gray-300 mt-4 text-center sm:text-center md:text-start max-w-lg">
            Experience the authentic taste of India’s regional kitchens. Freshly
            prepared traditional dishes using age-old recipes, seasonal
            ingredients, and cultural heritage.
          </p>

          <motion.button
            whileHover={{ scale: 1.05, x: 4 }}
            whileTap={{ scale: 0.96 }}
            className="mt-6 inline-flex items-center gap-2
                       bg-green-600 hover:bg-green-700
                       text-white px-3 py-1.5 rounded-md
                       font-semibold transition"
          >
            Know More
            <i className="fa-solid fa-arrow-right"></i>
          </motion.button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={rightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          className="relative flex justify-center lg:justify-end"
        >
          <img
            src={heroFood}
            alt="Traditional Indian Food"
            className="w-90 sm:w-130 lg:w-180 drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TraditionalFoodHero;
