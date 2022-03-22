import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

const Header = () => {
  const { ScrollY, onHeaderClick } = useContext(ThemeContext);

  return (
    <div
      className={`${
        ScrollY <= 0
          ? "w-[100vw] h-[10vh] relative z-10 lg:text-[30px] text-lg flex justify-center"
          : "w-[100vw] h-[10vh] fixed z-10 lg:text-[30px] text-lg flex justify-center  text-black bg-white shadow-lg"
      }`}
    >
      <div className="lg:w-[1100px] w-[93vw] h-[10vh] flex flex-row justify-between justify-center items-center ml-[2vw] mr-[2vw]">
        <div>JJUNI</div>
        <div className="flex flex-column ">
          <div
            className="lg:mr-[50px] mr-[3vw] cursor-pointer"
            id="first"
            onClick={(e) => onHeaderClick(e)}
          >
            Profile
          </div>
          <div
            className="lg:mr-[50px] mr-[3vw] cursor-pointer"
            id="second"
            onClick={(e) => onHeaderClick(e)}
          >
            Abilities
          </div>
          <div
            className="cursor-pointer"
            id="third"
            onClick={(e) => onHeaderClick(e)}
          >
            Projects
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
