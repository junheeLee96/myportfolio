import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import First_1 from "../../video/First_1.mp4";
import First_2 from "../../video/First_2.mp4";
import First_3 from "../../video/First_3.mp4";
import First_4 from "../../video/First_4.mp4";

const Th_firstBlock = () => {
  const [firstPro, setFirstPro] = useState(0);

  const [FirstArr, setFirstArr] = useState([]);

  useEffect(() => {
    setFirstArr([First_1, First_2, First_3, First_4]);
  }, []);

  const onNavBtnClick = (index) => {
    if (index < 0) {
      index = FirstArr.length - 1;
    }
    if (index >= FirstArr.length) {
      index = 0;
    }
    setFirstPro(index);
  };
  return (
    <div className="bg-white shadow-2xl	 lg:w-[900px] lg:h-[600px] w-[100vw] h-[90%] mt-14 flex flex-col	 justify-center items-center justify-between transform t 0.3s ">
      <div className="w-full h-[20%] pl-[1vw] pr-[1vw] flex flex-col justify-center items-center ">
        <div>소설 플랫폼 CRUD 클론 코딩</div>
        <div>(약 3주)</div>
      </div>
      <div className="w-full h-[75%] lg:grid lg:grid-cols-2 lg:gap-x-[5%] pl-[1vw] pr-[1vw] flex flex-col-reverse pr-[5%] pl-[5%] pt-[2px]	">
        <p className="lg:pt-0 pt-[2%]  pb-3">
          React.js, Node.js, Mysql과 Firebase를 이용한 웹입니다.
          <br />
          <br />
          '나만의 웹 소설 플랫폼을 갖고 싶다'라는 생각으로 시작한
          프로젝트입니다.
          <br />
          <br />
          실제 제가 이용하는 웹소설 플랫폼을 클론코딩하였고, ContextAPI로 props
          drilling을 최소화하며 CRUD시스템을 만들었습니다.
          <br />
          <br />
          홈화면에 슬라이더 기능을 넣어 최근 업데이트 된 소설을 볼 수 있게
          설정했고, 페이지네이션 기능을 추가해 컴포넌트의 렌더링을 최소화
          했습니다.
          <br />
          <br />
          <a
            href="https://github.com/junheeLee96/react-novel-app"
            target={`_blank`}
            rel="noreferrer"
          >
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg p-2">
              {" "}
              Source Code{" "}
            </button>
          </a>
        </p>

        <div className="`w-full h-fit whitespace-nowrap overflow-hidden items-stretch flex flex-col">
          <div
            className={`min-w-full inline-block		min-h-full flex whitespace-nowrap items-stretch duration-300`}
            style={{ transform: `translateX(-${firstPro * 100}%)` }}
          >
            {FirstArr &&
              FirstArr.map((video, idx) => (
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
              className="cursor-pointer pr-[3%]"
              onClick={() => {
                onNavBtnClick(firstPro - 1);
              }}
            />
            <div className="relative bottom-[7px]">
              {firstPro + 1}/{FirstArr.length}
            </div>
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              className="cursor-pointer pl-[3%]"
              onClick={() => {
                onNavBtnClick(firstPro + 1);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Th_firstBlock;
