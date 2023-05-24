import Image from "next/image";
import React from "react";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  AliwangwangOutlined,
  FieldTimeOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

const CustomerFooters = () => {
  const footersData = [
    {
      id: 1,
      title: "Address",
      subTitle:
        "  No:150, Kumaran Comlex, Covai Road, Karur, Karur - 639001 (Near Bus  Stand)",
      icon: <EnvironmentOutlined className="text-sm" />,
    },
    {
      id: 2,
      title: "Call Us",
      subTitle: "(+91) - 9876543210",
      icon: <PhoneOutlined className="text-sm" />,
    },
    {
      id: 3,
      title: "Email",
      subTitle: "sun@mobiles.com",
      icon: <AliwangwangOutlined className="text-sm" />,
    },
    {
      id: 4,
      title: "Hours",
      subTitle: "10:00 - 18:00, Mon - Sat",
      icon: <FieldTimeOutlined className="text-sm" />,
    },
  ];
  return (
    <div className="flex justify-center items-center ">
      {/* Locations */}
      <div className="w-[30vw] flex-col items-center pt-2 gap-y-4 h-[30vh] p-2">
        <div className="text-xl font-bold h-[5vh]">Sun Mobiles</div>
        <div className="pt-2 flex gap-y-2 gap-x-2 flex-col h-[20vh]">
          {footersData.map((res, index) => {
            return (
              <div
                key={index}
                className="flex gap-x-2 items-start justify-start"
              >
                <div>{res.icon}</div>
                <div className="font-bold">{res.title}:</div>
                <div className="text-md w-[20vw]">{res.subTitle}</div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Tours */}
      <div className="w-[20vw] flex-col items-center pt-2 gap-y-4 h-[30vh] p-2">
        <div className="text-xl font-bold h-[5vh]">Website Tour</div>
        <div className="pt-2 flex gap-y-2 flex-col  h-[20vh]">
          {["Home", "Categories", "Profile", "Orders", "Abous us"].map(
            (res, index) => {
              return (
                <div key={index} className="flex gap-x-2 items-start">
                  <div className="">{res}</div>
                </div>
              );
            }
          )}
        </div>
      </div>
      {/* follow */}
      <div className="w-[20vw] flex-col items-center pt-2 gap-y-4 h-[30vh] p-2">
        <div className="text-xl font-bold h-[5vh]">Follow Us</div>
        <div className="pt-2 flex gap-y-2 flex-col h-[20vh] ">
          <div className="group hover:font-semibold cursor-pointer flex flex-row items-center gap-x-2">
            <FacebookOutlined className="group-hover:text-[#1673eb] " />
            <h1 className="text-md">Facebook</h1>
          </div>
          <div className="group hover:font-semibold cursor-pointer flex flex-row items-center gap-x-2">
            <InstagramOutlined className="group-hover:text-[#f40873] " />
            <h1 className="text-md">Instagram</h1>
          </div>
          <div className="group hover:font-semibold cursor-pointer flex flex-row items-center gap-x-2">
            <TwitterOutlined className="group-hover:text-[#1c96e8] " />
            <h1 className="text-md">Twitter</h1>
          </div>
          <div className="group hover:font-semibold cursor-pointer flex flex-row items-center gap-x-2">
            <WhatsAppOutlined className="group-hover:text-[#1ad03f] " />
            <h1 className="text-md">Whatsapp</h1>
          </div>
          <div className="group invisible hover:font-semibold cursor-pointer flex flex-row items-center gap-x-2">
            <WhatsAppOutlined className="group-hover:text-[#1ad03f] " />
            <h1 className="text-md">Whatsapp</h1>
          </div>
        </div>
      </div>
      {/* React Us */}
      <div className="w-[20vw] flex-col items-center pt-2 gap-y-4 h-[30vh] p-2">
        <div className="text-xl font-bold h-[5vh]">Reach Us</div>
        <div className="pt-2 flex gap-y-2 flex-col h-[20vh] ">
          <div className="cursor-pointer flex flex-row items-center gap-x-2">
            <Image
              src="/assets/tags/app-store.avif"
              width={90}
              height={90}
              alt="logo"
              className="pb-2 "
            />
            <Image
              src="/assets/tags/google-play.avif"
              width={90}
              height={90}
              alt="logo"
              className="pb-2 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerFooters;
