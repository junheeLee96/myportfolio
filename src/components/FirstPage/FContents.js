import React, { useEffect, useState } from "react";
import profile2img from "../../img/profile2img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const FContents = () => {
  const [MouseTransition, setMouseTransition] = useState(0);

  const MouseOverOnIMG = () => {
    setMouseTransition(1);
  };

  const MouseLeaveOnIMG = () => {
    setMouseTransition(0);
  };

  return (
    <div className="absolute w-screen h-screen flex flex-col items-center	 justify-center	 z-3">
      <div className="mb-2 flex items-center	 justify-center flex-col ">
        <div
          onMouseEnter={MouseOverOnIMG}
          onMouseLeave={MouseLeaveOnIMG}
          className="rounded-[70%] lg:w-[15.1vw] lg:h-[25.1vh] w-[50vw] h-[25vh] absolute top-[28%] overflow-hidden"
        >
          <div
            className={`z-[10] rounded-[70%] bg-black w-full h-full opacity-70 flex items-center justify-center absolute top-[-100%] transform translate-y-[${
              MouseTransition * 100
            }%] duration-300 cursor-pointer`}
          ></div>
          <a
            href="https://github.com/junheeLee96"
            target={"_blank"}
            rel="noreferrer"
            className={`z-[10] rounded-[70%] text-[10vw] w-full h-full  flex items-center justify-center absolute top-[-100%] transform translate-y-[${
              MouseTransition * 100
            }%] duration-300 cursor-pointer`}
          >
            <FontAwesomeIcon icon={faGithub} style={{ color: "white" }} />
          </a>
          <img
            src={profile2img}
            alt=""
            style={{
              borderRadius: "70%",
              overflow: "hidden",
            }}
            className="lg:w-[15vw] lg:h-[25vh] w-[50vw] h-[25vh] cursor-pointer"
          />
        </div>
        <div className="relative top-[80%] flex flex-col items-center	 justify-center">
          <div>이준희</div>
          <div className="mt-[2.5px]">FrontEnd-Developer</div>
        </div>
        <div className="relative top-[100%]">
          <div className=" text-3xl w-[93vw] flex flex-col items-center justify-center">
            어제보다 더 향상된 오늘의 나를 위해 노력하며,
          </div>
          <div className="text-3xl w-[93vw] flex flex-col items-center justify-center">
            오늘보다 더 발전된 내일의 나를 꿈꿉니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FContents;
