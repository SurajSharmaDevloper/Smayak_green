import React from "react";

const Heading = ({ title }) => {
  return (
    <div className="w-full text-center flex justify-center items-center">
      <h2
        className="text-xl text-center ms-3 sm:text-3xl md:text-3xl font-semibold
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
