import HeroSlider from "../components/sections/HeroSlider";
import Heading from "../components/base/Heading";
import FoodSlider from "../components/sections/FoodSlider";
import TraditionalFoodHero from "../components/blocks/TraditionalFoodHero";
import Testimonial from "../components/blocks/Testimonial";
import ContactCTA from "../components/base/ContactCTA";
import ThreePillarsCards from "../components/blocks/ThreePillersCard";
import DishCardSlider from "../components/blocks/DishCardSlider";
import ingredient1 from "../assets/ingredient/ingredient1.png";
import ingredient2 from "../assets/ingredient/ingredient2.png";
import ingredient3 from "../assets/ingredient/ingredient3.png";
import ingredient4 from "../assets/ingredient/ingredient4.png";
import ingredient5 from "../assets/ingredient/ingredient5.png";
import ingredient6 from "../assets/ingredient/ingredient6.png";
import ingredient7 from "../assets/ingredient/ingredient7.png";
import ingredient8 from "../assets/ingredient/ingredient8.png";
import dish1 from "../assets/dishes/dish1.jpg";
import dish2 from "../assets/dishes/dish2.png";
import dish3 from "../assets/dishes/dish3.png";
import dish4 from "../assets/dishes/dish4.png";
import dish5 from "../assets/dishes/dish5.png";
import dish6 from "../assets/dishes/dish6.jpg";
import dish7 from "../assets/dishes/dish7.png";
import dish8 from "../assets/dishes/dish8.png";

const dishItems = [
  {
    id: 1,
    title: "Poha",
    store: "Annapurna Bhojanalaya",
    price: 40,
    image: dish1,
  },
  {
    id: 2,
    title: "Pitla Bhakri",
    store: "Desi Rasoi",
    price: 120,
    image: dish2,
  },
  {
    id: 3,
    title: "Macher Jhol",
    store: "Bangla Bhojan",
    price: 220,
    image: dish3,
  },
  {
    id: 4,
    title: "Alu Posto",
    store: "Shorshe Kitchen",
    price: 150,
    image: dish4,
  },
  {
    id: 5,
    title: "Dalma",
    store: "Odisha Thali House",
    price: 140,
    image: dish5,
  },
  {
    id: 6,
    title: "Kanika",
    store: "Utkal Bhoj",
    price: 130,
    image: dish6,
  },
  {
    id: 7,
    title: "Masala Dosa",
    store: "Dakshin Delights",
    price: 120,
    image: dish7,
  },
  {
    id: 8,
    title: "Idli Sambar",
    store: "South Corner",
    price: 90,
    image: dish8,
  },
];

const ingredientsItems = [
  {
    id: 1,
    title: "Hand-Pounded Rice (Ukda Tandul)",
    store: "Local Rice Mills, Maharashtra",
    price: 90,
    unit: "kg",
    image: ingredient1,
    significance: "Stone-pounded rice retaining natural bran and nutrients",
  },
  {
    id: 2,
    title: "Desi Cow Ghee (A2)",
    store: "Village Dairy Collectives",
    price: 1200,
    unit: "litre",
    image: ingredient2,
    significance: "Traditionally churned, used in Ayurvedic cooking",
  },
  {
    id: 3,
    title: "Forest Honey",
    store: "Tribal Honey Collectors",
    price: 450,
    unit: "500g",
    image: ingredient3,
    significance: "Raw, unprocessed honey from forest ecosystems",
  },
  {
    id: 4,
    title: "Black Sesame Seeds (Til)",
    store: "Traditional Farmers, Odisha",
    price: 220,
    unit: "kg",
    image: ingredient4,
    significance: "Used in ritual foods and winter nutrition",
  },
  {
    id: 5,
    title: "Kodo Millet",
    store: "Rainfed Tribal Farms",
    price: 160,
    unit: "kg",
    image: ingredient5,
    significance: "Ancient millet, climate-resilient and nutrient-dense",
  },
  {
    id: 6,
    title: "Wood-Pressed Mustard Oil",
    store: "Cold-Press Ghani Units",
    price: 280,
    unit: "litre",
    image: ingredient6,
    significance: "Extracted using traditional wooden presses",
  },
  {
    id: 7,
    title: "Stone-Ground Turmeric",
    store: "Small-Batch Spice Producers",
    price: 180,
    unit: "250g",
    image: ingredient7,
    significance: "Slow-ground turmeric with higher curcumin retention",
  },
  {
    id: 8,
    title: "Heritage Red Rice",
    store: "Indigenous Seed Farmers",
    price: 140,
    unit: "kg",
    image: ingredient8,
    significance: "Native rice variety with cultural and medicinal value",
  },
];

const Home = () => {
  return (
    <div className="">
      <div className="">
        <HeroSlider />
      </div>
      <div>
        <ThreePillarsCards />
      </div>
      <div>
        <div className="flex mt-10 justify-center items-center gap-3 flex-col">
          <h2 className="text-2xl font-semibold text-text border-b-3 w-fit border-primary-1">
            Our Popular Dishes
          </h2>
          <p className="text-primary text-lg">From Our Kitchens to You.</p>
        </div>
        <FoodSlider />
      </div>
      <TraditionalFoodHero />
      <div className="mt-8">
        <Heading title="Available Ingredients" />
        <DishCardSlider items={ingredientsItems} />
      </div>
      <Testimonial />
      <div className="mt-8">
        <Heading title="Traditional Dishes" />
        <DishCardSlider items={dishItems} />
      </div>
      <ContactCTA />
    </div>
  );
};

export default Home;
