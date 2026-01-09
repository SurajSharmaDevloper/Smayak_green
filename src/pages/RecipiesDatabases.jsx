import React from "react";
import RecipeExplorer from "../components/sections/RecipeExplorer";
import recDb1 from "../assets/RecipiesDatabase/PITHA.jfif";
import recDb2 from "../assets/RecipiesDatabase/DALMA.jfif";
import recDb3 from "../assets/RecipiesDatabase/ILISH.jfif";
import recDb4 from "../assets/RecipiesDatabase/RAGI.jfif";

const filtersConfig = {
  foodTypes: ["Veg", "Non-Veg", "Vegan"],
  healthCategories: [
    "Diabetic Friendly",
    "Heart Healthy",
    "Iron Rich",
    "High Fiber",
    "Weight Friendly",
  ],
  origins: [
    "Maharashtra",
    "Odisha",
    "West Bengal",
    "Karnataka",
    "Tribal / Forest Region",
  ],
};

const recipesData = [
  {
    id: 1,
    name: "Pithla Bhakri",
    origin: "Maharashtra",
    type: "Veg",
    health: "High Fiber",
    img: recDb1,
  },
  {
    id: 2,
    name: "Dalma",
    origin: "Odisha",
    type: "Veg",
    health: "Iron Rich",
    img: recDb2,
  },
  {
    id: 3,
    name: "Shorshe Ilish",
    origin: "West Bengal",
    type: "Non-Veg",
    health: "Heart Healthy",
    img: recDb3,
  },
  {
    id: 4,
    name: "Ragi Mudde",
    origin: "Karnataka",
    type: "Veg",
    health: "Diabetic Friendly",
    img: recDb4,
  },
];

const RecipiesDatabases = () => {
  return <RecipeExplorer filtersConfig={filtersConfig} recipes={recipesData} />;
};

export default RecipiesDatabases;
