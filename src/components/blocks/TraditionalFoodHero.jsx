import heroFood from "../../assets/Foods/IlishMash.png";

const TraditionalFoodHero = () => {
  return (
    <section className="relative w-full min-h-105 lg:min-h-130 overflow-hidden bg-black">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-green-900/70"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          <p className="text-green-500 font-semibold tracking-wide uppercase mb-3">
            Welcome to Sansiddhi Foods
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Today’s Special <br />
            Traditional Food
          </h1>

          <p className="text-orange-400 font-semibold mt-4">
            Limited Time Offer
          </p>

          <p className="text-gray-300 mt-4 max-w-lg">
            Experience the authentic taste of India’s regional kitchens. Freshly
            prepared traditional dishes using age-old recipes, seasonal
            ingredients, and cultural heritage.
          </p>

          <button className="mt-6 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-md font-semibold transition">
            Order Now
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Offer Badge */}
          <div className="absolute top-4 right-8 bg-white text-orange-600 font-bold px-4 py-2 rounded-full shadow-md z-10">
            45% OFF
          </div>

          <img
            src={heroFood}
            alt="Traditional Indian Food"
            className="w-90 sm:w-130 lg:w-180 drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default TraditionalFoodHero;
