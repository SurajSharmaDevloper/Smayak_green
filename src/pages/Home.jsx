import HeroSlider from "../components/sections/HeroSlider";
import Heading from "../components/base/Heading";
import FoodSlider from "../components/sections/FoodSlider";
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
      <div>

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
          How Samyak Green Works
        </h2>
      </div>
      <HowItWorks />
      <Testimonial />
      <ContactCTA />
    </div>
  );
};

export default Home;
