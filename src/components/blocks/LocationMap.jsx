import { useEffect, useState } from "react";

const locations = [
  { name: "Delhi", url: "https://www.google.com/maps?q=Delhi&output=embed" },
];

const LocationMap = ({ interval = 4000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % locations.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div className="relative w-full max-w-6xl mx-auto rounded-xl overflow-hidden border border-gray-200 h-50 ">
      {locations.map((location, index) => (
        <iframe
          key="Delhi"
          src="https://www.google.com/maps?q=Delhi&output=embed"
          title={location.name}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={`absolute inset-0 w-full h-full border-0 transition-opacity duration-700
            ${index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        />
      ))}
    </div>
  );
};

export default LocationMap;
