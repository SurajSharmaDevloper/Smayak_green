import { useEffect, useRef, useState } from "react";
import slide1 from "../../assets/slider/01_dishes.png";
import slide2 from "../../assets/slider/02_dishes.png";
import slide3 from "../../assets/slider/03_dishes.png";
import slide4 from "../../assets/slider/05_dishes.png";
import slide5 from "../../assets/slider/06_dishes.png";
import slide6 from "../../assets/slider/07_dishes.png";
import slide7 from "../../assets/slider/08_dishes.png";
import slide8 from "../../assets/slider/09_dishes.png";
import slide9 from "../../assets/slider/10_dishes.png";
import slide10 from "../../assets/slider/11_dishes.png";

const foodItems = [
  {
    id: 1,
    title: "Poha",
    origin: "Madhya Pradesh & Maharashtra",
    price: "₹40",
    image: slide1,
  },
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
  {
    id: 5,
    title: "Kanika",
    origin: "Odisha",
    price: "₹130",
    image: slide5,
  },
  {
    id: 6,
    title: "Dalma",
    origin: "Odisha",
    price: "₹140",
    image: slide6,
  },
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

// clone items for infinite loop
const loopItems = [...foodItems, ...foodItems];

const FoodSlider = () => {
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);
  const CARD_GAP = 24;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!sliderRef.current) return;

    const cardWidth = sliderRef.current.children[0].offsetWidth + CARD_GAP;

    sliderRef.current.style.transition = "transform 0.7s ease-in-out";
    sliderRef.current.style.transform = `translateX(-${index * cardWidth}px)`;

    // Reset silently when half reached
    if (index === foodItems.length) {
      setTimeout(() => {
        sliderRef.current.style.transition = "none";
        sliderRef.current.style.transform = "translateX(0px)";
        setIndex(0);
      }, 700);
    }
  }, [index]);

  return (
    <div className="mx-auto container mt-8 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative">
          <div ref={sliderRef} className="flex gap-6">
            {loopItems.map((item, i) => (
              <div
                key={i}
                className="relative min-w-65 bg-background rounded-2xl pt-16 pb-6 px-4 text-center shadow"
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                  <div className="w-24 h-24 rounded-full border-2 border-dashed border-primary-1 p-1 bg-white">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>

                <h3 className="font-semibold text-lg mt-2">{item.title}</h3>
                <p className="text-primary font-bold mt-2">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodSlider;
