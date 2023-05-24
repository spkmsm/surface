import { Badge, Divider } from "antd";
import Image from "next/image";
import React from "react";
import {
  SearchOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

const CustomerNavbar = () => {
  return (
    <div className="flex flex-col justify-center fixed top-0 w-screen z-50 bg-white">
      {/* step 1 */}
      <div className="flex justify-between p-2  items-center">
        <div className="flex gap-x-2 text-sm capitalize items-center">
          <div>About Us</div>
          <Divider type="vertical" />
          <div>My Account</div>
          <Divider type="vertical" />
          <div>Wishlist</div>
          <Divider type="vertical" />
          <div>Order Tracking</div>
        </div>
        <div>
          <div>free delivery for all orders</div>
        </div>
        <div className="flex gap-x-1 text-sm capitalize items-center">
          <div>call us : 9876543210</div>
          <Divider type="vertical" />
          <FacebookOutlined />
          <Divider type="vertical" />
          <InstagramOutlined />
          <Divider type="vertical" />
          <TwitterOutlined />
          <Divider type="vertical" />
          <WhatsAppOutlined />
        </div>
      </div>
      <hr />
      {/* step 2 */}
      <div className="flex justify-center items-center h-[10vh]">
        <div className="flex justify-between items-center w-[90vw] h-[10vh]  ">
          <div>
            <Image
              src="/assets/logo/logo.png"
              width={90}
              height={90}
              alt="logo"
              className="pb-2 "
            />
          </div>
          <div>
            <div className="flex items-center justify-between  border border-slate-50  p-2 rounded">
              <input
                placeholder="I'm looking for...."
                className="outline-none border-none w-[30vw] placeholder:text-slate-200"
              />
              <div className="flex items-center w-[2vw]">
                <Divider type="vertical" />
                <SearchOutlined className="text-slate-200" />
              </div>
            </div>
          </div>
          <div className="flex gap-x-2 text-sm capitalize items-center">
            <Badge count={10} size="small" color="#9843A1">
              <div className="flex items-center gap-x-2">
                <Image
                  src="/assets/icons/cart.png"
                  width={20}
                  height={20}
                  alt="logo"
                />
                <div>cart</div>
              </div>
            </Badge>
            <Divider type="vertical" />
            <div className="flex items-center gap-x-2">
              <Image
                src="/assets/icons/login.png"
                width={20}
                height={20}
                alt="logo"
              />
              <div>Login</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerNavbar;
