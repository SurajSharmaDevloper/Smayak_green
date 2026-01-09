import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Dropdown from "../base/Dropdown";
import Heading from "../base/Heading";

/* ----------------------------------
   MAIN COMPONENT
---------------------------------- */
const RecipeExplorer = ({ filtersConfig, recipes }) => {
  const [search, setSearch] = useState("");
  const [foodType, setFoodType] = useState("");
  const [healthType, setHealthType] = useState("");
  const [origin, setOrigin] = useState("");

  /* FILTER LOGIC */
  const filteredRecipes = recipes.filter((r) => {
    return (
      (!search || r.name.toLowerCase().includes(search.toLowerCase())) &&
      (!foodType || r.type === foodType) &&
      (!healthType || r.health === healthType) &&
      (!origin || r.origin === origin)
    );
  });

  return (
    <motion.section
      className="relative bg-[#F9F6EF] py-6 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      {/* DECORATIVE OBJECTS */}
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-green-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-200/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* FILTER PANEL */}
          <motion.aside
            className="lg:col-span-3 bg-background border border-green-200 rounded-xl p-5 shadow-sm"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-start text-xl w-fit text-text font-semibold mb-4 border-b-2 p-0 border-primary">
              Recipies Database
            </h2>
            <input
              className="
                w-full px-3 py-2 mb-4 text-sm
                outline-none rounded-lg
                bg-white
                border border-lime-300
                hover:border-lime-400
                focus:border-lime-400 focus:ring-2 focus:ring-lime-200
              "
              placeholder="Search recipes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="space-y-4">
              <Dropdown
                label="Food Type"
                placeholder="Select food type"
                options={filtersConfig.foodTypes}
                value={foodType}
                onChange={setFoodType}
              />

              <Dropdown
                label="Health Category"
                placeholder="Select health"
                options={filtersConfig.healthCategories}
                value={healthType}
                onChange={setHealthType}
              />

              <Dropdown
                label="Place of Origin"
                placeholder="Select state"
                options={filtersConfig.origins}
                value={origin}
                onChange={setOrigin}
              />
            </div>

            {/* CLEAR FILTERS */}
            <button
              onClick={() => {
                setSearch("");
                setFoodType("");
                setHealthType("");
                setOrigin("");
              }}
              className="mt-4 w-full text-sm text-green-700 underline"
            >
              Clear all filters
            </button>
          </motion.aside>

          {/* RECIPE GRID */}
          <motion.div
            className="lg:col-span-9"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <AnimatePresence mode="popLayout">
                {filteredRecipes.map((r) => (
                  <motion.div
                    key={r.id}
                    initial={{ opacity: 0, y: 25, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    whileHover={{ y: -6 }}
                    className="bg-background border border-green-200 rounded-xl shadow-sm overflow-hidden group"
                  >
                    {/* IMAGE */}
                    <div className="relative h-36 bg-gray-100 overflow-hidden">
                      {r.img ? (
                        <img
                          src={r.img}
                          alt={r.name}
                          loading="lazy"
                          className="
                            w-full h-full object-cover
                            transition-transform duration-300
                            group-hover:scale-105
                          "
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                          No Image
                        </div>
                      )}
                    </div>

                    {/* CONTENT */}
                    <div className="p-4">
                      <h4 className="font-semibold">{r.name}</h4>
                      <p className="text-xs text-gray-600">
                        Origin: {r.origin}
                      </p>

                      <div className="flex gap-2 mt-2 text-xs">
                        <span className="px-2 py-1 bg-green-500/40 rounded">
                          {r.type}
                        </span>
                        <span className="px-2 py-1 bg-orange-500/40 rounded">
                          {r.health}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {!filteredRecipes.length && (
                <p className="col-span-full text-center text-gray-500">
                  No recipes found
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default RecipeExplorer;
