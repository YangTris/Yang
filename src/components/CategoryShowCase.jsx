import React from "react";
import { Link } from "react-router-dom";

function CategoryShowCase() {
  const categories = [
    {
      name: "Shirt",
      image: "https://media3.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/March2025/ao-thun-cate_86.jpg",
      link: "product/shirt",
    },
    {
      name: "Coat",
      image: "https://media3.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/March2025/ao-khoac-cate_16.jpg",
      link: "product/coat",
    },
    {
      name: "Pant",
      image: "https://media3.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/March2025/quan-dai-cate_24.jpg",
      link: "product/pant",
    },
    {
      name: "Sportswear",
      image: "https://media3.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/March2025/quan-short-cate_36.jpg",
      link: "product/shorts",
    },
  ];

  const CategoryCard = ({ category }) => {
    return (
      <Link to={category.link} className="text-center transition-colors duration-300 transform hover:scale-105 hover:shadow-lg ">
        <img
          src={category.image}
          alt={category.name}
          className="w-full object-cover rounded-2xl"
        />
        <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-gray-100">{category.name}</h3>
      </Link>
    );
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
    </div>
  );
}

export default CategoryShowCase;
