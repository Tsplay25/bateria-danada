"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination.css";
// import "../app/globals.css";

interface IProps {
  title: string;
  carouselImgs: string[];
  content: string;
}

const SocialCard = ({ title, carouselImgs, content }: IProps) => {
  const carousel = useRef();
  const [carouselWidth, setCarouselWidth] = useState(0);

  useEffect(() => {
    console.log(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    setCarouselWidth(
      carousel.current?.scrollWidth - carousel.current?.offsetWidth
    );
  }, []);

  return (
    <>
      <div className="flex flex-col gap-4 bg-white/70 rounded-3xl max-w-96 items-center p-4 shadow-2xl">
        <h3 className="text-blue-dark font-roboto text-3xl font-bold text-center w-full">
          {title}
        </h3>

        {/* Carousel */}

        {/* <div className="bg-blue-light">
          {carouselImgs.map((img, index) => (
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <picture key={index}>
                  <img
                    src={`/img/events-social/carousel-images/${img}`}
                    alt="Imagem do evento ou ação social"
                  />
                </picture>
              </SwiperSlide>
            </Swiper>
          ))}
        </div> */}

        <motion.div
          ref={carousel}
          className="max-w-72 lg:max-w-96 cursor-grab overflow-hidden"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="flex"
            drag="x"
            dragConstraints={{ right: 0, left: -carouselWidth }}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {carouselImgs.map((img, index) => (
              <motion.div key={index} className="min-h-24 min-w-52 p-2">
                <picture>
                  <img
                    className="w-full h-full rounded-xl pointer-events-none"
                    src={`/img/events-social/carousel-images/${img}`}
                    alt="Imagem do evento ou ação social"
                  />
                </picture>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div
          className={
            title === "Sambanada"
              ? "bg-sambanada-logo bg-no-repeat bg-contain bg-center"
              : "bg-dnd-de-lata-logo bg-no-repeat bg-contain bg-center"
          }
        >
          <p className="text-blue-dark font-roboto text-xl text-center leading-5">
            {content}
          </p>
        </div>
      </div>
    </>
  );
};

export default SocialCard;
