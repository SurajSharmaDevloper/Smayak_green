import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import DishAvailabilityCard from "../base/DishAvailabilityCard";

const DishCardSlider = ({ items }) => {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const CARD_GAP = 24;
  const AUTO_SLIDE_TIME = 3000;

  const [index, setIndex] = useState(0);

  // duplicate items for infinite loop
  const loopItems = [...items, ...items];

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, AUTO_SLIDE_TIME);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (!sliderRef.current) return;

    const cardWidth = sliderRef.current.children[0].offsetWidth + CARD_GAP;

    sliderRef.current.style.transition = "transform 0.7s ease-in-out";
    sliderRef.current.style.transform = `translateX(-${index * cardWidth}px)`;

    // silent reset
    if (index === items.length) {
      setTimeout(() => {
        sliderRef.current.style.transition = "none";
        sliderRef.current.style.transform = "translateX(0px)";
        setIndex(0);
      }, 700);
    }
  }, [index, items.length]);

  const next = () => setIndex((prev) => prev + 1);
  const prev = () => setIndex((prev) => Math.max(prev - 1, 0));

  return (
    <section className="relative overflow-hidden py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* SLIDER ENTER ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="relative"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          {/* LEFT BUTTON */}
          <motion.button
            onClick={prev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2
                       z-10 w-10 h-10 rounded-full
                       bg-primary text-[#e2e2e2]
                       hover:bg-[#73a784]
                       shadow justify-center items-center"
          >
            <i className="fa-solid fa-angle-left"></i>
          </motion.button>

          {/* RIGHT BUTTON */}
          <motion.button
            onClick={next}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2
                       z-10 w-10 h-10 rounded-full
                       bg-primary text-[#e2e2e2]
                       hover:bg-[#73a784]
                       shadow justify-center items-center"
          >
            <i className="fa-solid fa-angle-right"></i>
          </motion.button>

          {/* SLIDER */}
          <div className="overflow-hidden">
            <motion.div
              ref={sliderRef}
              className="flex gap-6 will-change-transform"
            >
              {loopItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.05,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -6 }}
                  className="min-w-70"
                >
                  <DishAvailabilityCard
                    image={item.image}
                    title={item.title}
                    store={item.store}
                    price={item.price}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DishCardSlider;
