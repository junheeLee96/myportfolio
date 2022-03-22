import React from "react";
import FContents from "./FContents";
import Header from "./Header";

const FirstPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center text-white ">
      <div className=" bg-coding bg-cover bg-center w-screen h-screen absolute z-1 "></div>
      <div className="w-screen h-screen bg-black opacity-50 absolute z-2"></div>
      <Header />
      <FContents />
    </div>
  );
};

export default FirstPage;
