import { useEffect, useState } from "react";
import banner_2 from "../../assets/images/BANNER-2.png";
import banner_3 from "../../assets/images/BANNER-3.png";
import banner_4 from "../../assets/images/BANNER-4.jpg";

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
      className="relative w-full h-[30vh] sm:h-[35vh] lg:h-[70vh] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides */}
      {slides.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt={`Banner ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 
                   bg-black/40 hover:bg-black/60 text-white 
                   w-10 h-10 rounded-full flex items-center justify-center"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 
                   bg-black/40 hover:bg-black/60 text-white 
                   w-10 h-10 rounded-full flex items-center justify-center"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      {/* Pagination */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 
                      flex gap-2 z-20"
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index
                ? "bg-green-600 scale-110"
                : "bg-green-500/20 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
