import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import Twitter_1 from "../../video/Twitter_1.mp4";
import Twitter_2 from "../../video/Twitter_2.mp4";
import Twitter_3 from "../../video/Twitter_3.mp4";

const Th_SecBlock = () => {
  const [secondPro, setSecondPro] = useState(0);
  const [SecondArr, setSecondArr] = useState([]);

  useEffect(() => {
    setSecondArr([Twitter_1, Twitter_2, Twitter_3]);
  }, []);

  const onNavBtnClick = (index) => {
    if (index < 0) {
      index = SecondArr.length - 1;
    }
    if (index >= SecondArr.length) {
      index = 0;
    }
    setSecondPro(index);
  };

  return (
    <div className="bg-white shadow-2xl	 lg:w-[900px] lg:h-[400px] w-[100vw] h-[90%] mt-14 flex flex-col	 justify-center items-center justify-between transform t 0.3s">
      <div className="w-full h-[20%] pl-[1vw] pr-[1vw] flex flex-col justify-center items-center">
        <div>SNS 클론코딩</div>
        <div>(약 1주)</div>
      </div>
      <div className="w-full h-[75%] lg:grid lg:grid-cols-2 lg:gap-x-[5%] pl-[1vw] pr-[1vw] flex flex-col-reverse pr-[5%] pl-[5%] pt-[2px]">
        <p className="lg:pt-0 pt-[2% pr-[5%]] pb-3">
          React.js와 Firebase를 이용한 웹입니다.
          <br />
          <br />
          Firebase의 DataBase를 이용하며 정형화된 SQL이 아닌 NoSQL을
          학습했습니다.
          <br />
          <br />
          <a
            href="https://github.com/junheeLee96/twitter-app"
            target={`_blank`}
          >
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg p-2">
              {" "}
              Source Code{" "}
            </button>
          </a>
          <br />
          <a
            href="https://junheelee96.github.io/twitter-app/"
            target={`_blank`}
          >
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg p-2 mt-2">
              {" "}
              Watch the project{" "}
            </button>
          </a>
        </p>
        <div className="`w-full h-fit whitespace-nowrap overflow-hidden items-stretch flex flex-col">
          <div
            className={`min-w-full	min-h-full flex whitespace-nowrap items-stretch	 duration-300`}
            style={{ transform: `translateX(-${secondPro * 100}%)` }}
          >
            {SecondArr &&
              SecondArr.map((video, idx) => (
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
              className="cursor-pointer pr-[2%]"
              onClick={() => {
                onNavBtnClick(secondPro - 1);
              }}
            />
            <div className="relative bottom-[7px]">
              {secondPro + 1}/{SecondArr.length}
            </div>
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              className="cursor-pointer pl-[2%]"
              onClick={() => {
                onNavBtnClick(secondPro + 1);
              }}
            />
          </div>
        </div>
      </div>
      {/* <div className="h-[5%] flex flex-row absolute lg:bottom-[30%] lg:right-[22%] lg:text-black cursor-pointer flex flex-row justify-between  bottom-[45%] ">
        <FontAwesomeIcon
          icon={faArrowAltCircleLeft}
          className="w-full h-full mr-[20%]"
          onClick={() => {
            onNavBtnClick(secondPro - 1);
          }}
        />
        <div className="">
          {secondPro + 1}/{SecondArr.length}
        </div>
        <FontAwesomeIcon
          icon={faArrowAltCircleRight}
          className="w-full h-full ml-[20%] cursor-pointer	"
          onClick={() => {
            onNavBtnClick(secondPro + 1);
          }}
        />
      </div> */}
    </div>
  );
};

export default Th_SecBlock;
