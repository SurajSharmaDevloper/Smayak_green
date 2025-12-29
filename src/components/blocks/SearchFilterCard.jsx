import React, { useState } from "react";
import Dropdown from "../base/Dropdown";

const SearchFilterCard = ({
  expertiseOptions = [],
  experienceOptions = [],
  cityOptions = [],
  className,
  onSearch,
}) => {
  const [expertise, setExpertise] = useState("");
  const [experience, setExperience] = useState("");
  const [city, setCity] = useState("");

  const handleSearch = () => {
    onSearch?.({ expertise, experience, city });
  };

  return (
    <div
      className={`w-full bg-background border border-lime-300 bg-white rounded-2xl shadow-md p-2 sm:p-4 ${className} `}
    >
      <div className="grid grid-cols-1 gap-4">
        {/* Expertise */}
        <h2
          className="text-lg sm:text-xl md:text-2xl font-semibold
        text-text text-primary
        border-b-3 border-primary w-fit 
        "
        >
          Find Your Need
        </h2>
        <Dropdown />

        {/* Experience */}
        <Dropdown />

        {/* City */}
        <Dropdown />

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="w-full rounded-lg bg-primary text-white
                     px-3 py-1.5 hover:bg-green-600 active:scale-95 transition-all"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchFilterCard;
