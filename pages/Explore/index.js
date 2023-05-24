import React from "react";
import Explore from "../Home";
import Filters from "./Filters";

const Filter = () => {
  return (
    <div>
      <div className="flex flex-col justify-between  items-center">
        <div className="flex flex-col gap-y-10">
          <Filters />
        </div>
      </div>
    </div>
  );
};

export default Filter;
