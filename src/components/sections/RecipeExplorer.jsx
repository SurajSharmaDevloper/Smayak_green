import { useState } from "react";
import Dropdown from "../base/Dropdown";
import Input from "../base/Input";

const RecipeExplorer = () => {
  const [filters, setFilters] = useState({
    type: "",
    health: "",
    origin: "",
  });
  const [foodType, setFoodType] = useState("");
  const [healthType, setHealthType] = useState("");
  const [origin, setOrigin] = useState("");

  return (
    <section className="w-full bg-[#F9F6EF] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT FILTER PANEL */}
          <aside className="lg:col-span-3 bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg text-text border-b-3 border-primary-1 font-semibold mb-4">
              Find Traditional Recipes
            </h3>
            <div className="mt-3">
              <Input placeholder="Search recipes..." />
            </div>
            <div className="mt-5">
              {/* Food Type */}
              <Dropdown
                label="Food Type"
                placeholder="Select food type"
                options={["Veg", "Non-Veg", "Vegan"]}
                value={foodType}
                onChange={setFoodType}
              />
            </div>
            <div className="mt-5">
              {/* Health Category */}
              <Dropdown
                label="Health Category"
                placeholder="Select health category"
                options={[
                  "Diabetic Friendly",
                  "Heart Healthy",
                  "Iron Rich",
                  "High Fiber",
                  "Weight Friendly",
                ]}
                value={healthType}
                onChange={setHealthType}
              />
            </div>
            <div className="mt-5">
              {/* Place of Origin */}
              <Dropdown
                label="Place of Origin"
                placeholder="Select origin"
                options={[
                  "Maharashtra",
                  "Odisha",
                  "West Bengal",
                  "Karnataka",
                  "Tribal / Forest Region",
                ]}
                value={origin}
                onChange={setOrigin}
              />
            </div>
          </aside>

          {/* RIGHT RECIPE GRID */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Recipe Card */}
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
                >
                  <div className="h-40 bg-gray-200"></div>

                  <div className="p-4">
                    <h4 className="font-semibold text-lg">
                      Traditional Recipe Name
                    </h4>
                    <p className="text-sm text-gray-500">Origin: Maharashtra</p>

                    <div className="flex gap-2 mt-3 text-xs">
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded">
                        Veg
                      </span>
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded">
                        Iron Rich
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeExplorer;
