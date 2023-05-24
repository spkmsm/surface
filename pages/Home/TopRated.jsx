import { Divider, Rate } from "antd";
import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Image from "next/image";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper";

const TopRated = () => {
  return (
    <div className="flex w-[90vw] items-center justify-center">
      <div className="w-[20vw] h-[70vh] flex items-center justify-center ">
        <div>
          <div className="text-2xl font-bold">Top Rated Products</div>
        </div>
      </div>
      <div>
        <div className="w-[70vw]  flex  justify-start flex-wrap gap-10 h-[80vh]">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            freeMode={true}
            autoplay={true}
            modules={[FreeMode, Pagination, Autoplay]}
            className=" h-[70vh] !bg-white !flex !items-center !justify-center !p-2 w-[70vw]"
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
                  <div
                    className="card w-[21vw] bg-base-100 shadow-xl h-[65vh]"
                    key={index}
                  >
                    <figure className="px-10 pt-10 h-[30vh] cursor-pointer">
                      <Image
                        width={100}
                        height={100}
                        src={`/assets/categories/${res}.png`}
                        alt="Shoes"
                        className="rounded-xl w-[50%]"
                      />
                    </figure>
                    <div className="card-body h-[35vh]">
                      <h2 className="font-bold">
                        Gorton’s Beer Battered Fish Fillets
                      </h2>
                      <Rate allowHalf defaultValue={2.5} className="!text-sm" />
                      <div className="flex gap-x-10 justify-between items-center">
                        <div className="self-start flex gap-x-2 ">
                          <div className="text-green-500 font-bold">
                            &#8377;299
                          </div>
                          <div className="stroke-inherit line-through text-slate-400">
                            &#8377;500
                          </div>
                        </div>
                      </div>
                      <div
                        className="absolute bottom-5 w-[15vw] flex items-center justify-center gap-x-2 bg-[#C978C1] text-white p-2 rounded
                  "
                      >
                        <ShoppingCartOutlined />
                        <div>Add To Cart</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TopRated;
