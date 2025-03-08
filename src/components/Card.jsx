import React from "react";
import AddToCard from "./AddToCard";

function Card({ title, price, image, salePercent, priceAfterSale }) {
  return (
    <div className="relative w-full transition-colors rounded-md shadow-m text-center overflow-hidden">
      <button
        type="button"
        className="absolute top-7 right-5 p-1 rounded-full bg-transparen dark:bg-neutral-800"
      >
        {salePercent}
      </button>

      <img
        src={image}
        alt="Product Image"
        className="mx-auto mt-1 mb-3 w-full object-cover rounded-2xl"
      />

      <div className="text-gray-700 font-light text-xl dark:text-gray-50">
        {title}
      </div>
      <p className="flex flex-row justify-center items-center m-3">
        <div className="text-black dark:text-white text-sm font-bold  justify-start mr-5">
          {price}
        </div>
        
        <div className="text-gray-400 line-through text-sm justify-end">
          {priceAfterSale}
        </div>
      </p>

      <AddToCard />
    </div>
  );
}

export default Card;
