import React from "react";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import Marketing from "../components/Marketing";
import Category from "../components/CategoryShowCase";
function Home() {
  return (
    <>
      <Hero />
      <h2 class="max-w-7xl px-20 mt-10 items-center text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
        New Arrivals
      </h2>
      <Carousel />
      <Marketing />
      <h2 class="max-w-7xl px-20 mt-10 items-center text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
        Category
      </h2>
      <Category />  
      Test Test hello world
    </>
  );
}

export default Home;
