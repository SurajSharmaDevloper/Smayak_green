import { useEffect, useRef } from "react";
import User from "../../assets/images/UserImg.jpg";

const CARD_WIDTH = 350;
const CARD_HEIGHT = 200;

const TestimonialSlider = ({
  testimonials = [],
  speed = 0.5, // lower = slower
}) => {
  const trackRef = useRef(null);

  // Duplicate list for seamless loop
  const loopData = [...testimonials, ...testimonials];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let scrollPos = 0;

    const animate = () => {
      scrollPos += speed;
      if (scrollPos >= track.scrollWidth / 2) {
        scrollPos = 0;
      }
      track.style.transform = `translateX(-${scrollPos}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, [speed]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={trackRef}
        className="flex gap-6 will-change-transform"
        style={{ width: "max-content" }}
      >
        {loopData.map((item, index) => (
          <div
            key={index}
            className="bg-background border border-gray-200 rounded-2xl shadow-sm
                       flex flex-col justify-between p-5"
            style={{
              width: CARD_WIDTH,
              height: CARD_HEIGHT,
              flexShrink: 0,
            }}
          >
            {/* Message */}
            <p className="text-gray-700 text-md leading-relaxed line-clamp-4">
              “{item.message}”
            </p>

            {/* Author */}
            <div className="flex mt-3 ">
              <div className="w-15 h-15">
                <img className="w-12 h-12 rounded-full" src={User} alt="" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-lg">
                  {item.name}
                </p>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
