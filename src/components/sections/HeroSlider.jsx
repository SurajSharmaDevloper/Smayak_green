import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import banner_2 from "../../assets/Foods/Banner_1.png";
import banner_3 from "../../assets/Foods/Banner_2.png";
import banner_4 from "../../assets/Foods/Banner_3.png";

const overlayVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

const HeroSlider = () => {
  const slides = [banner_2, banner_3, banner_4];

  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isHovered, slides.length]);

  return (
    <section
      className="relative w-full bg-neutral-900/30 overflow-hidden h-[50vh] sm:h-[60vh] lg:h-[75vh]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img
            src={slides[current]}
            alt={`Banner ${current + 1}`}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div
            className="
              absolute inset-0 bg-linear-to-r
              from-black/85 via-black/65 to-black/30
              sm:from-black/70 sm:via-black/40 sm:to-transparent
            "
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`overlay-${current}`}
            variants={overlayVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.4 }}
            className="w-[94%] max-w-6xl mx-auto px-2 sm:px-4"
          >
            <h1
              className="
                text-white font-bold leading-tight
                text-base sm:text-3xl lg:text-5xl
              "
            >
              Preserving Traditional Food Wisdom.
              <br />
              Empowering Healthy Futures.
            </h1>

            <p
              className="
                mt-1 sm:mt-4 max-w-xl
                text-[11px] sm:text-base lg:text-lg
                text-gray-200
              "
            >
              Preserving India’s traditional food wisdom for sustainable
              <br />
              nutrition and healthier lives.
            </p>

            <div className="mt-3 sm:mt-6 flex flex-col sm:flex-row gap-2 sm:gap-4">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="
                  px-3 sm:px-6 py-2 sm:py-3
                  bg-green-600 hover:bg-green-700
                  text-white rounded-full
                  text-[11px] sm:text-sm
                  font-medium transition
                "
              >
                Explore Traditional Recipes
              </motion.button>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="
                  px-3 sm:px-6 py-2 sm:py-3
                  border border-white/60
                  text-white rounded-full
                  text-[11px] sm:text-sm
                  font-medium hover:bg-white hover:text-black transition
                "
              >
                Learn Our Mission
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <motion.button
        onClick={prevSlide}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20
                   bg-black/40 hover:bg-black/60 text-white
                   w-10 h-10 rounded-full items-center justify-center"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </motion.button>

      <motion.button
        onClick={nextSlide}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20
                   bg-black/40 hover:bg-black/60 text-white
                   w-10 h-10 rounded-full items-center justify-center"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </motion.button>

      {/* Pagination */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrent(index)}
            whileHover={{ scale: 1.2 }}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
              current === index
                ? "bg-green-600 scale-110"
                : "bg-green-500/30 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
