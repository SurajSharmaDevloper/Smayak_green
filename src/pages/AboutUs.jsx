import founderImg from "../assets/images/founder.png";
import banner from "../assets/Foods/about.jpg";
import Heading from "../components/base/Heading";
import About from "../assets/Foods/aboutus.jpg";
import banner1 from "../assets/Foods/banner1.png";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <main className="w-full">
      {/* HERO */}
      <motion.div
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
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }} // reload
        whileInView={{ opacity: 1, y: 0 }} // scroll
        viewport={{ once: false, amount: 0.3 }} // re-trigger on scroll
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          <h2 className="fw-bold text-5xl font-semibold text-[#c7c7c7]">
            About Us
          </h2>
          <p className="text-muted text-[#c7c7c7]">
            Pure Traditions. Pure Taste.
          </p>
        </motion.div>
      </motion.div>
      {/* ABOUT TEXT */}
      <motion.div
        className="p-5 px-5 sm:px-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }} // reload
        whileInView={{ opacity: 1, y: 0 }} // scroll
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Heading title="About Brands" />

        <div className="flex max-[1100px]:flex-col mt-5 gap-8 items-start justify-between">
          {/* TEXT BLOCK */}
          <motion.div
            className="w-[55%] max-[1100px]:w-full p-4 rounded-xl bg-background"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
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
          </motion.div>

          {/* IMAGE */}
          <motion.div
            className="w-[40%] max-[1100px]:hidden max-[700px]:block max-[700px]:w-full"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              className="h-50 sm:h-60 md:h-70 rounded-xl border border-lime-300"
              src={About}
              alt=""
            />
          </motion.div>
        </div>
      </motion.div>
      {/* WHY WE EXIST */}
      <motion.section
        className="py-5"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }} // reload
        whileInView={{ opacity: 1, y: 0 }} // scroll
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* HEADING */}
          <motion.div
            className="flex mt-5 mb-5 justify-center items-center gap-3 flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-semibold text-text border-b-3 w-fit border-primary-1">
              Why This Food Platform Exists
            </h2>
          </motion.div>

          {/* CARDS */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {/* CARD 1 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              className="bg-background p-5 rounded-xl shadow-sm"
            >
              <h4 className="font-semibold mb-2 text-xl text-primary border-b-2 w-fit border-gray-500">
                For Nutrition
              </h4>
              <p className="text-sm text-gray-600">
                To address hidden hunger by reviving iron-rich, fiber-rich, and
                seasonal traditional foods.
              </p>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              className="bg-background p-5 rounded-xl shadow-sm"
            >
              <h4 className="font-semibold mb-2 text-xl text-primary border-b-2 w-fit border-gray-500">
                For Communities
              </h4>
              <p className="text-sm text-gray-600">
                To respect and uplift women cooks, farmers, SHGs, and tribal
                food knowledge holders.
              </p>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              className="bg-background p-5 rounded-xl shadow-sm"
            >
              <h4 className="font-semibold mb-2 text-xl text-primary border-b-2 w-fit border-gray-500">
                For Sustainability
              </h4>
              <p className="text-sm text-gray-600">
                To promote climate-resilient diets, biodiversity, and low-waste
                cooking traditions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      <section className="w-full bg-background py-10">
        <motion.div
          className="mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center overflow-x-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }} // reload
          whileInView={{ opacity: 1, y: 0 }} // scroll
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* LEFT IMAGE */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: -40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="w-75 h-75 sm:w-105 sm:h-105 rounded-tl-[50px] overflow-hidden rounded-br-[50px]">
              <img
                src={banner1}
                alt="Traditional Food"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Play Icon */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 220, damping: 16 }}
            >
              <div className="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center shadow-lg cursor-pointer">
                <i className="fa-solid fa-play text-green-600"></i>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Label */}
            <motion.div
              className="flex items-center gap-2 mb-3 text-green-600 font-semibold uppercase text-sm"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <i className="fa-solid fa-bowl-food text-2xl"></i>
              <span className="text-2xl">About Us</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              From Community Kitchens <br />
              to Collective Wellbeing
            </motion.h2>

            {/* Description */}
            <motion.p
              className="mt-4 text-gray-600 max-w-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We document and preserve India’s traditional food wisdom—rooted in
              seasonal nutrition, indigenous ingredients, and community
              knowledge passed down through generations.
            </motion.p>

            {/* Divider */}
            <motion.div
              className="my-8 border-t border-gray-300"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
            />

            {/* FEATURES */}
            <motion.div
              className="grid sm:grid-cols-2 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
            >
              {[
                {
                  icon: "fa-leaf",
                  title: "Authentic Traditional Food",
                  text: "Community-driven recipes rooted in sustainability and nutrition.",
                },
                {
                  icon: "fa-people-group",
                  title: "Community Knowledge",
                  text: "Preserving wisdom shared by home cooks, farmers, and elders.",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  className="flex gap-4"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, ease: "easeOut" },
                    },
                  }}
                >
                  <div className="text-green-600 text-3xl">
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <motion.section
        className="w-full md:px-10 sm:px-5 px-4 py-5"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }} // reload
        whileInView={{ opacity: 1, y: 0 }} // scroll
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {/* MISSION */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.96 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              whileHover={{ y: -6 }}
              className="relative bg-background rounded-2xl p-8 shadow-md overflow-hidden"
            >
              {/* Circles */}
              <span className="absolute -top-14 -left-14 w-44 h-44 bg-green-300/30 rounded-full"></span>
              <span className="absolute top-6 left-38 w-28 h-28 bg-pink-300/20 rounded-full"></span>
              <span className="absolute bottom-10 right-10 w-20 h-20 bg-green-300/30 rounded-full"></span>
              <span className="absolute -bottom-5 left-15 w-30 h-30 bg-red-300/30 rounded-full"></span>

              <div className="relative z-10">
                <div className="text-green-600 text-4xl mb-4">
                  <i className="fa-solid fa-bullseye"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To document, preserve, and share indigenous recipes and
                  traditional food practices that promote nutritional wellbeing,
                  ecological balance, and cultural continuity. We aim to make
                  traditional food knowledge visible, respected, and
                  usable—without commercial distortion or cultural exploitation.
                </p>
              </div>
            </motion.div>

            {/* VISION */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.96 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              whileHover={{ y: -6 }}
              className="relative bg-background rounded-2xl p-8 shadow-md overflow-hidden"
            >
              {/* Circles */}
              <span className="absolute -top-14 -right-14 w-44 h-44 bg-gray-400/50 rounded-full"></span>
              <span className="absolute top-0 right-42 w-28 h-28 bg-yellow-200/40 rounded-full"></span>
              <span className="absolute bottom-12 left-10 w-20 h-20 bg-purple-500/10 rounded-full"></span>
              <span className="absolute -bottom-8.5 right-20 w-25 h-25 bg-green-400/20 rounded-full"></span>

              <div className="relative z-10">
                <div className="text-gray-700 text-4xl mb-4">
                  <i className="fa-regular fa-eye"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A future where traditional food wisdom is recognised as a
                  vital resource for: Nutritional security Sustainable living
                  Community resilience Intergenerational learning We envision
                  Samyak Green as a living knowledge bank, rooted in communities
                  and shaped by collective stewardship.
                </p>
              </div>
            </motion.div>

            {/* VALUES */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.96 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              whileHover={{ y: -6 }}
              className="relative bg-background rounded-2xl p-8 shadow-md overflow-hidden"
            >
              {/* Circles */}
              <span className="absolute -bottom-14 -left-14 w-44 h-44 bg-blue-300/35 rounded-full"></span>
              <span className="absolute bottom-20 left-32 w-28 h-28 bg-yellow-100/60 rounded-full"></span>
              <span className="absolute top-12 right-10 w-20 h-20 bg-lime-300/40 rounded-full"></span>
              <span className="absolute -top-4.5 left-20 w-16 h-16 bg-green-200/50 rounded-full"></span>

              <div className="relative z-10">
                <div className="text-green-700 text-4xl mb-4">
                  <i className="fa-regular fa-gem"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Our Values
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Samyak Green values traditional knowledge, community wisdom,
                  and sustainable food practices, preserving authentic
                  indigenous nutrition with care, integrity, and respect for
                  people and the planet.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* OUR APPROACH */}
      <motion.section
        className="max-w-7xl mx-auto px-4 py-6 overflow-x-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }} // reload
        whileInView={{ opacity: 1, y: 0 }} // scroll
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* HEADING */}
        <motion.div
          className="flex mt-4 mb-5 justify-center items-center gap-3 flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-semibold text-text border-b-3 w-fit border-primary-1">
            Our Approach
          </h2>
        </motion.div>

        {/* CARDS */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          {[
            "Document Traditions",
            "Verify Nutrition",
            "Empower Communities",
            "Share Knowledge",
          ].map((text) => (
            <motion.div
              key={text}
              className="bg-background p-4 rounded-xl shadow-sm"
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.96 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.4, ease: "easeOut" },
                },
              }}
              whileHover={{ y: -4 }}
            >
              <p className="font-medium text-sm">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="bg-green-200 py-10 text-center overflow-x-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }} // reload
        whileInView={{ opacity: 1, y: 0 }} // scroll
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h3
          className="font-semibold mb-3"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          Join Us in Preserving Traditional Food Wisdom
        </motion.h3>

        <motion.div
          className="flex justify-center gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {/* BUTTON 1 */}
          <motion.button
            className="px-5 py-2 bg-green-700 text-white rounded-md text-sm"
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: "easeOut" },
              },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Recipes
          </motion.button>

          {/* BUTTON 2 */}
          <motion.button
            className="px-5 py-2 border border-green-700 text-green-700 rounded-md text-sm"
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: "easeOut" },
              },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contribute Knowledge
          </motion.button>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default AboutUs;
