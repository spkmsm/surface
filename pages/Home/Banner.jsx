import { Carousel } from "antd";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="flex gap-x-1 pt-[18vh]">
      {/* left */}
      <Carousel autoplay dotPosition="right" className="w-[60vw] h-[50vh]">
        <div className="cursor-pointer rounded-lg">
          <Image
            src="/assets/images/2.avif"
            width={100}
            height={100}
            alt="logo"
            className="w-[60vw] h-[50vh] rounded-lg"
          />
        </div>
        <div className="cursor-pointer rounded-lg">
          <Image
            src="/assets/images/3.avif"
            width={100}
            height={100}
            alt="logo"
            className="w-[60vw] h-[50vh] rounded-lg"
          />
        </div>
        <div className="cursor-pointer rounded-lg">
          <Image
            src="/assets/images/4.avif"
            width={100}
            height={100}
            alt="logo"
            className="w-[60vw] h-[50vh] rounded-lg"
          />
        </div>
      </Carousel>

      {/* right */}
      <div className="w-[30vw] h-[50vh] justify-between flex flex-col">
        <div>
          <div className="cursor-pointer">
            <Image
              src="/assets/images/left1.jpg"
              width={100}
              height={100}
              alt="logo"
              className="w-[30vw] h-[24.8vh] rounded-lg"
            />
          </div>
        </div>
        <div>
          <div className="cursor-pointer">
            <Image
              src="/assets/images/left2.jpg"
              width={100}
              height={100}
              alt="logo"
              className="w-[30vw] h-[24.8vh] rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
