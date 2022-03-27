import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import youtube from "../../video/youtube.mp4";
import youtube2 from "../../video/youtube2.mp4";

const Th_ThirdBlock = () => {
  const [fourth, setFourth] = useState(0);
  const FourthArr = [youtube, youtube2];

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
        <div>Youtube 웹</div>
        <div>(3일))</div>
      </div>
      <div className="w-full h-[75%] lg:grid lg:grid-cols-2 lg:gap-x-[5%] pl-[1vw] pr-[1vw] flex flex-col-reverse pr-[5%] pl-[5%] pt-[2px]	">
        <p className="lg:pt-0 pt-[2%]  pb-3">
          Youtube API를 이용한 Youtube 클론입니다.
          <br />
          <br />
          Youtube API를 이용해 추천 영상을 불러오는 기능과 영상 재생, 영상 검색
          기능을 넣은 웹입니다.
          <br />
          grid를 사용해 반응형으로 제작하였습니다.
          <br />
          <br />
          <a
            href="https://github.com/junheeLee96/react-youtube"
            target={`_blank`}
          >
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg p-2">
              {" "}
              Source Code{" "}
            </button>
          </a>
          <br />
          <a
            href="https://junheelee96.github.io/react-youtube/"
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
