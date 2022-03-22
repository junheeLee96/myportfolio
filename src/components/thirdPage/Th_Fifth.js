import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import momen from "../../video/momentum.mp4";

const Th_ThirdBlock = () => {
  const [fourth, setFourth] = useState(0);
  const FourthArr = [momen];

  const onNavBtnClick = (index) => {
    if (index < 0) {
      index = FourthArr.length - 1;
    }
    if (index >= FourthArr.length) {
      index = 0;
    }
    setFourth(index);
  };
  return (
    <div className="bg-white shadow-2xl	mb-14 lg:w-[900px] lg:h-[400px] w-[100vw] h-[90%] mt-14 flex flex-col	 justify-center items-center justify-between transform t 0.3s ">
      <div className="w-full h-[20%] pl-[1vw] pr-[1vw] flex flex-col justify-center items-center ">
        <div>Momentum 웹</div>
        <div>(일주일))</div>
      </div>
      <div className="w-full h-[75%] lg:grid lg:grid-cols-2 lg:gap-x-[5%] pl-[1vw] pr-[1vw] flex flex-col-reverse pr-[5%] pl-[5%] pt-[2px]	">
        <p className="lg:pt-0 pt-[2%]  pb-3">
          순수 자바스크립트를 이용하여 만든 웹입니다.
          <br />
          <br />
          자바스크립트를 배운 후, 유튜버 노마드 님의 강의 영상을 보며 처음 만든
          웹입니다.
          <br />
          유저, To-Do List 등의 정보를 LocalStorage를 통해 저장하였고,
          <br />
          날씨 API를 통해 사용자의 위치와 날씨를 나타냈습니다.
          <br />
          <br />
          <a href="https://github.com/junheeLee96/momentum" target={`_blank`}>
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg p-2">
              {" "}
              Source Code{" "}
            </button>
          </a>
          <br />
          <a href="https://junheelee96.github.io/momentum/" target={`_blank`}>
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg p-2 mt-2">
              {" "}
              Watch the project{" "}
            </button>
          </a>
        </p>

        <div className="`w-full h-fit whitespace-nowrap overflow-hidden items-stretch flex flex-col">
          <div
            className={`min-w-full inline-block		min-h-full flex whitespace-nowrap items-stretch	 duration-300`}
            style={{ transform: `translateX(-${fourth * 100}%)` }}
          >
            {FourthArr.map((video, idx) => (
              <video
                key={idx}
                autoPlay={true}
                muted={true}
                loop={true}
                className="w-full h-[100%]"
              >
                <source
                  src={video}
                  type="video/mp4"
                  className="w-full h-[100%]"
                />
              </video>
            ))}
          </div>
          <div className="text-[150%] flex flex-row relative left-[40%] pt-[5%]">
            <FontAwesomeIcon
              icon={faArrowAltCircleLeft}
              className="cursor:pointer pr-[3%]"
              onClick={() => {
                onNavBtnClick(fourth - 1);
              }}
            />
            <div className="relative bottom-[7px]">
              {fourth + 1}/{FourthArr.length}
            </div>
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              className="cursor-pointer pl-[3%]"
              onClick={() => {
                onNavBtnClick(fourth + 1);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Th_ThirdBlock;
