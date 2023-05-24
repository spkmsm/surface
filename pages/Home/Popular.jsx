import { Rate, Skeleton } from "antd";
import Image from "next/image";
import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";

const Popular = () => {
  return (
    <div>
      <div className="text-2xl font-bold">Popular Products</div>
      <div className="w-[90vw] pt-4 flex justify-start flex-wrap gap-10">
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
            <div
              className="card w-[20vw] bg-base-100 shadow-xl h-[65vh]"
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
                    <div className="text-green-500 font-bold">&#8377;299</div>
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
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
