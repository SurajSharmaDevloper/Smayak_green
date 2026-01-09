import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import slide1 from "../../assets/slider/01_dishes.png";
import slide2 from "../../assets/slider/02_dishes.png";
import slide3 from "../../assets/slider/03_dishes.png";
import slide4 from "../../assets/slider/05_dishes.png";
import slide5 from "../../assets/slider/06_dishes.png";
import slide6 from "../../assets/slider/07_dishes.png";
import slide7 from "../../assets/slider/08_dishes.png";
import slide8 from "../../assets/slider/09_dishes.png";
import slide9 from "../../assets/slider/10_dishes.png";

const foodItems = [
  { id: 1, title: "Poha", origin: "Maharashtra", price: "₹40", image: slide1 },
  {
    id: 2,
    title: "Pitla Bhakri",
    origin: "Maharashtra",
    price: "₹120",
    image: slide2,
  },
  {
    id: 3,
    title: "Macher Jhol",
    origin: "West Bengal",
    price: "₹220",
    image: slide3,
  },
  {
    id: 4,
    title: "Alu Posto",
    origin: "West Bengal",
    price: "₹150",
    image: slide4,
  },
  { id: 5, title: "Kanika", origin: "Odisha", price: "₹130", image: slide5 },
  { id: 6, title: "Dalma", origin: "Odisha", price: "₹140", image: slide6 },
  {
    id: 7,
    title: "Vada Pav",
    origin: "Maharashtra",
    price: "₹40",
    image: slide7,
  },
  {
    id: 8,
    title: "Masala Dosa",
    origin: "Karnataka",
    price: "₹120",
    image: slide8,
  },
  {
    id: 9,
    title: "Idli Sambar",
    origin: "Tamil Nadu",
    price: "₹90",
    image: slide9,
  },
];

// duplicate for infinite loop
const loopItems = [...foodItems, ...foodItems];

const FoodSlider = () => {
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);
  const CARD_GAP = 24;

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Translate slider
  useEffect(() => {
    if (!sliderRef.current) return;

    const cardWidth = sliderRef.current.children[0].offsetWidth + CARD_GAP;

    sliderRef.current.style.transition = "transform 0.7s ease-in-out";
    sliderRef.current.style.transform = `translateX(-${index * cardWidth}px)`;

    // silent reset
    if (index === foodItems.length) {
      setTimeout(() => {
        sliderRef.current.style.transition = "none";
        sliderRef.current.style.transform = "translateX(0px)";
        setIndex(0);
      }, 700);
    }
  }, [index]);

  return (
    <section className="mx-auto container mt-8 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* SLIDER ENTER ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          {/* SLIDER TRACK */}
          <motion.div
            ref={sliderRef}
            className="flex gap-6 will-change-transform"
          >
            {loopItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease: "easeOut",
                }}
                whileHover={{ y: -6 }}
                className="relative min-w-[260px]
                           bg-background rounded-2xl
                           pt-16 pb-6 px-4 text-center shadow"
              >
                {/* Image */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                  <div
                    className="w-24 h-24 rounded-full
                                  border-2 border-dashed
                                  border-primary-1 p-1 bg-white"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-semibold text-lg mt-2">{item.title}</h3>
                <p className="text-primary font-bold mt-2">{item.origin}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FoodSlider;
