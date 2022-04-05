import React from "react";
import FContents from "./FContents";
import Header from "./Header";

const FirstPage = ({ FirstPageRef, HeaderRef }) => {
  return (
    <div
      className="w-screen h-screen flex justify-center text-white "
      ref={FirstPageRef}
    >
      <div className=" bg-coding bg-cover bg-center w-screen h-screen absolute z-1 "></div>
      <div className="w-screen h-screen bg-black opacity-50 absolute z-2"></div>
      <Header HeaderRef={HeaderRef} />
      <FContents />
    </div>
  );
};

export default FirstPage;
