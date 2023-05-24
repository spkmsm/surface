import React from "react";
import Banner from "./Banner";
import Popular from "./Popular";
import BestDeal from "./BestDeal";
import TopRated from "./TopRated";
import Offers from "./Offers";
import { Skeleton } from "antd";
import Categories from "./Categories";

const Explore = () => {
  return (
    <div className="flex flex-col gap-y-10 ">
      <Banner />
      <Skeleton active avatar loading={false}>
        <Offers />
      </Skeleton>
      <Skeleton active avatar loading={false}>
        <Categories />
      </Skeleton>
      <Skeleton active avatar loading={false}>
        <Popular />
      </Skeleton>
      <Skeleton active avatar loading={false}>
        <BestDeal />
      </Skeleton>
      <Skeleton active avatar loading={false}>
        <TopRated />
      </Skeleton>
    </div>
  );
};

export default Explore;
