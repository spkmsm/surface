import { Carousel } from "antd";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";

import { Autoplay, FreeMode, Pagination, autoplay } from "swiper";

const ProductsDatas = () => {
  return (
    <div>
      <div className="text-2xl font-bold">Popular Products</div>
      <div className="w-[90vw] pt-4">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <Image
              width={100}
              height={100}
              src="/assets/categories/mobile.png"
              alt="Shoes"
              className="rounded-xl w-[90%]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Productname</h2>
            <p>If a dog chews shoes whose shoes ose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDatas;
