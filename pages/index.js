import React from "react";
import Explore from "./Home";
import Banner from "./Home/Banner";
import Offers from "./Home/Offers";
import Categories from "./Home/Categories";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col justify-between  items-center">
        <div className="flex flex-col gap-y-10">
          <Explore />
        </div>
      </div>
    </div>
  );
};

export default Home;
