import HeroSlider from "../components/sections/HeroSlider";
import Heading from "../components/base/Heading";
import FoodSlider from "../components/sections/FoodSlider";
import About from "../assets/Foods/aboutus.jpg";
import HowItWorks from "../components/blocks/HowItWorks";
import TraditionalFoodHero from "../components/blocks/TraditionalFoodHero";
import Testimonial from "../components/blocks/Testimonial";
import ContactCTA from "../components/base/ContactCTA";
const Home = () => {
  return (
    <div className="">
      <div className="">
        <HeroSlider />
      </div>
      <div className="p-5 px-5 sm:px-10">
        <Heading title="About Brands" />
        <div className="flex max-[1100px]:flex-col-reverse mt-5 gap-8 items-start justify-between">
          <div className="w-[55%] max-[1100px]:w-full p-4 rounded-xl bg-background">
            <h4 className="text-xl font-semibold text-primary">
              Pure Traditions. Pure Taste.
            </h4>
            <p className="text-justify text-text">
              Our brand is dedicated to preserving and delivering authentic
              Indian traditional food that originates from the kitchens of our
              mothers and grandmothers. We bring together the best quality,
              time-honoured recipes from every state of India, prepared using
              traditional methods, natural ingredients, and cultural wisdom
              passed down through generations. Each dish represents the
              heritage, simplicity, and purity of regional Indian cuisine—free
              from shortcuts, excessive processing, or modern dilution. Our
              mission is to reconnect people with the original taste of India,
              celebrating the diversity of states while maintaining the warmth,
              care, and authenticity of home-cooked food.
            </p>
          </div>

          <div className="w-[40%] max-[1100px]:hidden max-[700px]:block max-[700px]:w-full">
            <img
              className="h-80 rounded-xl border border-lime-300"
              src={About}
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <div className="flex mt-10 justify-center items-center gap-3 flex-col">
          <h2 className="text-2xl font-semibold text-text border-b-3 w-fit border-primary-1">
            Our Popular foods
          </h2>
          <p className="text-primary text-lg">
            From Our Grandmothers’ Kitchens to You.
          </p>
        </div>
        <FoodSlider />
      </div>
      <TraditionalFoodHero />
      <div className="flex mt-8 justify-center items-center gap-3 flex-col">
        <h2 className="text-2xl font-semibold text-text border-b-3 w-fit border-primary-1">
          How Sansiddhi Works
        </h2>
      </div>
      <HowItWorks />
      <Testimonial />
      <ContactCTA />
    </div>
  );
};

export default Home;
