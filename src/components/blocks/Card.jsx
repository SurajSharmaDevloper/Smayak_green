import React from "react";

const Card = () => {
  return (
    <div className="">
      <div className="flex flex-col">
        <div>
          <h2>For Companies</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            mollitia, perspiciatis vel voluptas cum assumenda ad animi nobis
            omnis doloremque rerum natus ipsa!
          </p>
        </div>

        <button className="flex items-center gap-1 justify-center">
          Enroll Now
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Card;
