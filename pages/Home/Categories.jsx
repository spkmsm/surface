import { Carousel } from "antd";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";

import { Autoplay, FreeMode, Pagination } from "swiper";

const Categories = () => {
  return (
    <div>
      <div className="text-2xl font-bold">Featured Categories</div>
      <div className="w-[90vw] pt-4">
        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          freeMode={true}
          autoplay={true}
          modules={[FreeMode, Pagination, Autoplay]}
          className=" h-[35vh] !bg-white !flex !items-center !justify-center !p-2"
        >
          {[
            "mobile",
            "keyboard",
            "joystick",
            "headphone",
            "mobile",
            "keyboard",
            "joystick",
            "headphone",
            "mobile",
            "keyboard",
            "joystick",
            "headphone",
            "mobile",
            "keyboard",
            "joystick",
            "headphone",
          ].map((res, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="card w-[12vw] bg-base-100 shadow-xl h-[30vh] cursor-pointer">
                  <figure className="px-10 pt-10 h-[15vh]">
                    <Image
                      src={`/assets/categories/${res}.png`}
                      width={100}
                      height={100}
                      className="rounded-xl w-[70%]"
                      alt="logo"
                    />
                  </figure>
                  <div className="card-body items-center text-center h-[15vh]">
                    <div className="flex flex-col items-center">
                      <div className="text-lg text-slate-500 capitalize">
                        {res}
                      </div>
                      <div className="text-sm  text-slate-300">12 Items</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Categories;
