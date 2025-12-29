import React from "react";

const CourseCard = ({
  title = "Course Title",
  description = "Short course description goes here.",
  buttonText = "Enroll Now",
  className,
  onAction,
}) => {
  return (
    <div
      className={`w-full bg-background rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-lime-300 duration-300`}
    >
      <div className="p-2 h-full sm:p-3 md:p-4 flex flex-col justify-between gap-4">
        <div className="">
          {/* Heading */}
          <h2
            className="text-lg sm:text-xl md:text-2xl font-semibold
        text-text text-primary
        border-b-3 border-primary w-fit 
        "
          >
            {title}
          </h2>

          {/* Description */}
          <p className="text-sm mt-3 sm:text-base text-text leading-relaxed">
            {description}
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2 w-full flex justify-end ">
          <button
            onClick={onAction}
            className="bg-primary text-white px-3 py-1.5 rounded-lg hover:bg-green-600 transition flex items-center-safe gap-2"
          >
            <i class="fa-solid fa-arrow-right"></i>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
