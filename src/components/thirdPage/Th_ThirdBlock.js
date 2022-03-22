import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import chat1 from "../../video/chat_1.mp4";
import chat2 from "../../video/chat_2.mp4";

const Th_ThirdBlock = () => {
  const [thirdPro, setThirdPro] = useState(0);
  const ThirdArr = [chat1, chat2];

  const onNavBtnClick = (index) => {
    if (index < 0) {
      index = ThirdArr.length - 1;
    }
    if (index >= ThirdArr.length) {
      index = 0;
    }
    setThirdPro(index);
  };
  return (
    <div className="bg-white shadow-2xl	 lg:w-[900px] lg:h-[400px] w-[100vw] h-[90%] mt-14 flex flex-col	 justify-center items-center justify-between transform t 0.3s ">
      <div className="w-full h-[20%] pl-[1vw] pr-[1vw] flex flex-col justify-center items-center ">
        <div>채팅 웹</div>
        <div>(약 1주)</div>
      </div>
      <div className="w-full h-[75%] lg:grid lg:grid-cols-2 lg:gap-x-[5%] pl-[1vw] pr-[1vw] flex flex-col-reverse pr-[5%] pl-[5%] pt-[2px]	">
        <p className="lg:pt-0 pt-[2%]  pb-3">
          Node.js와 Socket.io, MySQL을 이용한 채팅 웹입니다.
          <br />
          <br />
          '나만의 꿈'을 실현하기 위한 여정 중 웹 브라우저의 동작, 백엔드와의
          통신을 깊이 이해하기 위해 시작한 프로젝트입니다.
          <br />
          <br />
          <a
            href="https://github.com/junheeLee96/Nodejs-chatting"
            target={`_blank`}
          >
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg p-2">
              {" "}
              Source Code{" "}
            </button>
          </a>
        </p>

        <div className="`w-full h-fit whitespace-nowrap overflow-hidden items-stretch flex flex-col">
          <div
            className={`min-w-full inline-block		min-h-full flex whitespace-nowrap items-stretch	 duration-300`}
            style={{ transform: `translateX(-${thirdPro * 100}%)` }}
          >
            {ThirdArr.map((video, idx) => (
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
                onNavBtnClick(thirdPro - 1);
              }}
            />
            <div className="relative bottom-[7px]">
              {thirdPro + 1}/{ThirdArr.length}
            </div>
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              className="cursor-pointer pl-[3%]"
              onClick={() => {
                onNavBtnClick(thirdPro + 1);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Th_ThirdBlock;
