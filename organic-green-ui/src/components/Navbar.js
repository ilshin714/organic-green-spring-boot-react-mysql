import React from "react";

const Navbar = () => {
  return (
    <div className="w-full sm:w-10/12 mx-auto">
      <div className="h-16 px-8 flex items-center mx-auto">
        <h1 className="mx-auto sm:mx-0 text-3xl font-bold text-lime-800 uppercase ">Organic Green</h1>
      </div>
      <div className="w-full sm:w-1/2 flex mx-auto justify-around pb-4 text-lime-800">
        <button className="hover:font-bold hover:-translate-y-1 duration-100 hover:ease-in-out">NEW</button>
        <button className="hover:font-bold hover:-translate-y-1 duration-100 hover:ease-in-out">BEST</button>
        <button className="hover:font-bold hover:-translate-y-1 duration-100 hover:ease-in-out">SPECIAL OFFER</button>
      </div>
    </div>
  );
};

export default Navbar;
