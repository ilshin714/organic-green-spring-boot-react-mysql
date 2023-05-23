import React from "react";
import Slider from "./Slider";
import Item from "./Item";

function Main() {
  return (
    <div className="h-full">
      <Slider />
      <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-10/12 mx-auto grid gap-16 ">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />

      </div>
    </div>
  );
}

export default Main;
