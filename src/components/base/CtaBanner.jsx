import sansiddhiLogo from "../../assets/NoBack_Logo.png";

const CtaBanner = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row items-center">
        {/* LEFT – LOGO SECTION */}
        <div className="w-full md:w-1/3 bg-primary px-6 py-8 flex flex-col justify-center">
          <img src={sansiddhiLogo} alt="Sansiddhi Logo" className="w-40 mb-2" />
        </div>

        {/* RIGHT – CTA SECTION */}
        <div className="w-full md:w-2/3 bg-red-400 px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <h3 className="text-white text-xl md:text-2xl font-semibold text-center sm:text-left">
            Work With Best Restaurant Theme
          </h3>

          <button className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-red-600 transition">
            ORDER NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
