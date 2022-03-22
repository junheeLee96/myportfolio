import React, { useEffect, useState } from "react";
import Th_firstBlock from "./Th_firstBlock";
import Th_SecBlock from "./Th_SecBlock";
import Th_ThirdBlock from "./Th_ThirdBlock";
import Th_Fth from "./Th_Fth";
import Th_Fifth from "./Th_Fifth";

const ThirdPAge = () => {
  return (
    <div className=" bg-cyan-600	 w-screen  flex flex-col justify-center items-center  z-2 !important">
      <Th_firstBlock />
      <Th_SecBlock />
      <Th_ThirdBlock />
      <Th_Fth />
      <Th_Fifth />
    </div>
  );
};

export default ThirdPAge;
