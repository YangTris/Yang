import React, { useEffect, useState } from "react";
import Card from "./Card";
import NewCard from "./NewCard";

import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

function Carousel() {
  const [cards, setCards] = useState([]);

  // Fetch data
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=7")
      .then((response) => response.json())
      .then((data) => setCards(data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 m-auto w-full mb-10 object-cover">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="py-5"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div>
              <Card
                key={index}
                title={card.name.first}
                price={card.name.last}
                image={card.picture.large}
                salePercent="-10%"
                priceAfterSale="$90"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
