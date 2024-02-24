"use client";

import React from "react";

interface IProps {
  title: string;
  carouselImgs: string[];
  content: string;
}

const SocialCard = ({ title, carouselImgs, content }: IProps) => {
  return (
    <>
      <div className="flex flex-col gap-4 bg-white/70 rounded-3xl p-4">
        <h3 className="text-blue-dark font-sugo text-3xl text-center w-full">
          {title}
        </h3>

        {/* Carousel */}
        <div className="bg-blue-light">{carouselImgs}</div>

        <div className="bg-sambanada-logo bg-no-repeat bg-contain bg-center">
          <p className="text-blue-dark font-sugo text-xl text-center leading-5">
            {content}
          </p>
        </div>
      </div>
    </>
  );
};

export default SocialCard;
