import React from "react";

const Heading = ({ title }) => {
  return (
    <div className="w-full">
      <h2
        className="text-xl ms-3 sm:text-xl md:text-2xl font-semibold
        text-text text-primary
        border-b-3 border-primary w-fit 
        "
      >
        {title}
      </h2>
    </div>
  );
};

export default Heading;
