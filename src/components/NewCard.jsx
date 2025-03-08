import React from "react";
import AddToCard from "./AddToCard";

function NewCard({ title, price, image }) {
  return (
    <div className="relative w-full bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow dark:bg-neutral-900">
      {/* Product image */}
      <img
        src={image}
        alt="Product image"
        className="w-full object-cover rounded-md"
      />

      {/* Product info */}

        <h3 className="text-base font-semibold text-gray-800 dark:text-white">
          {title}
        </h3>
        <span className="text-lg font-bold text-gray-800 dark:text-white">
          {price}
        </span>


      {/* Price and add-to-cart */}
      <div className="mt-3 card-actions justify-center">
        <AddToCard />
      </div>
    </div>
  );
}

export default NewCard;
