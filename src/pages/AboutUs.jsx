import founderImg from "../assets/images/founder.png";
import banner from "../assets/Foods/about.jpg";
import Heading from "../components/base/Heading";

const AboutUs = () => {
  return (
    <main className="w-full">
      {/* HERO */}
      <div
        className="relative w-full min-h-50 bg-center bg-cover bg-no-repeat text-center flex justify-center items-center-safe"
        style={{
          backgroundImage: `
                        linear-gradient(
                                to right,
                                rgba(0, 0, 0, 0.75),
                                rgba(10, 40, 80, 0.6),
                                rgba(99, 179, 67, 0.7)
                                ),
                        url(${banner})
                      `,
        }}
      >
        <div>
          <h2 className="fw-bold text-5xl font-semibold text-[#c7c7c7]">
            About Us
          </h2>
          <p className="text-muted text-[#c7c7c7]">
            Pure Traditions. Pure Taste.
          </p>
        </div>
      </div>

      {/* ABOUT TEXT */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <Heading title="About Our Food Initiative" />
        <p className="text-sm p-3 mt-5 bg-background rounded-2xl text-gray-700 leading-relaxed">
          Our traditional food initiative is built to document, preserve, and
          promote India’s indigenous recipes, regional food practices, and
          nutrition wisdom. Rooted in villages, forests, farms, and kitchens,
          this platform connects cultural knowledge with modern awareness to
          fight nutritional hunger and revive sustainable food systems.
        </p>
      </section>

      {/* WHY WE EXIST */}
      <section className=" py-5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex mt-5 mb-5 justify-center items-center gap-3 flex-col">
            <h2 className="text-2xl font-semibold text-text border-b-3 w-fit border-primary-1">
              Why This Food Platform Exists
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background p-5 rounded-xl shadow-sm">
              <h4 className="font-semibold mb-2">For Nutrition</h4>
              <p className="text-sm text-gray-600">
                To address hidden hunger by reviving iron-rich, fiber-rich, and
                seasonal traditional foods.
              </p>
            </div>

            <div className="bg-background p-5 rounded-xl shadow-sm">
              <h4 className="font-semibold mb-2">For Communities</h4>
              <p className="text-sm text-gray-600">
                To respect and uplift women cooks, farmers, SHGs, and tribal
                food knowledge holders.
              </p>
            </div>

            <div className="bg-background p-5 rounded-xl shadow-sm">
              <h4 className="font-semibold mb-2">For Sustainability</h4>
              <p className="text-sm text-gray-600">
                To promote climate-resilient diets, biodiversity, and low-waste
                cooking traditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="max-w-7xl mx-auto mb-3 px-4 py-12">
        <div className="flex mt-5 mb-5 justify-center items-center gap-3 flex-col">
          <h2 className="text-2xl font-semibold text-text border-b-3 w-fit border-primary-1">
            Founder & Leadership
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-1 flex bg-background rounded-2xl p-2 justify-center">
            <img
              src={founderImg}
              alt="Founder"
              className="w-40 h-40 rounded-full object-cover bg-green-100"
            />
          </div>

          <div className="md:col-span-2 bg-background p-5 rounded-2xl">
            <h4 className="font-semibold text-lg">Founder Name</h4>
            <p className="text-sm text-gray-500 mb-3">
              Food Researcher & Sustainability Advocate
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              The initiative is led by professionals deeply engaged in food
              systems, nutrition research, and ecological sustainability. The
              leadership ensures ethical documentation, cultural respect, and
              long-term impact-driven growth.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className=" py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-background p-5 rounded-xl shadow-sm">
            <h4 className="font-semibold mb-2">Our Mission</h4>
            <p className="text-sm text-gray-600">
              To preserve and promote India’s traditional recipes as tools for
              nutrition, culture, and sustainability.
            </p>
          </div>

          <div className="bg-background p-5 rounded-xl shadow-sm">
            <h4 className="font-semibold mb-2">Our Vision</h4>
            <p className="text-sm text-gray-600">
              A future where traditional food knowledge supports healthy,
              resilient communities.
            </p>
          </div>

          <div className="bg-background p-5 rounded-xl shadow-sm">
            <h4 className="font-semibold mb-2">Our Values</h4>
            <p className="text-sm text-gray-600">
              Authenticity, respect for communities, sustainability, and food
              justice.
            </p>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex mt-5 mb-5 justify-center items-center gap-3 flex-col">
          <h2 className="text-2xl font-semibold text-text border-b-3 w-fit border-primary-1">
            Our Approach
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-background p-4 rounded-xl shadow-sm">
            <p className="font-medium text-sm">Document Traditions</p>
          </div>
          <div className="bg-background p-4 rounded-xl shadow-sm">
            <p className="font-medium text-sm">Verify Nutrition</p>
          </div>
          <div className="bg-background p-4 rounded-xl shadow-sm">
            <p className="font-medium text-sm">Empower Communities</p>
          </div>
          <div className="bg-background p-4 rounded-xl shadow-sm">
            <p className="font-medium text-sm">Share Knowledge</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-200 py-10 text-center">
        <h3 className="font-semibold mb-3">
          Join Us in Preserving Traditional Food Wisdom
        </h3>
        <div className="flex justify-center gap-4">
          <button className="px-5 py-2 bg-green-700 text-white rounded-md text-sm">
            Explore Recipes
          </button>
          <button className="px-5 py-2 border border-green-700 text-green-700 rounded-md text-sm">
            Contribute Knowledge
          </button>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
