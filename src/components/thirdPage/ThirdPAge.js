import React from "react";
import youtube from "../../video/youtube.mp4";
import youtube2 from "../../video/youtube2.mp4";
import First_1 from "../../video/First_1.mp4";
import First_2 from "../../video/First_2.mp4";
import First_3 from "../../video/First_3.mp4";
import First_4 from "../../video/First_4.mp4";
import Twitter_1 from "../../video/Twitter_1.mp4";
import Twitter_2 from "../../video/Twitter_2.mp4";
import Twitter_3 from "../../video/Twitter_3.mp4";
import chat1 from "../../video/chat_1.mp4";
import chat2 from "../../video/chat_2.mp4";
import game from "../../video/game.mp4";
import momen from "../../video/momentum.mp4";
import Video from "./Video";

const arr = [
  {
    id: 1,
    vid: [youtube, youtube2],
    title: "Youtube 웹",
    while: "(3일)",
    content:
      "Youtube API를 이용한 Youtube 클론입니다.  \n\n Youtube API를 이용해 추천 영상을 불러오는 기능과 영상 재생, 영상 검색 기능을 넣은 웹입니다. \n grid를 사용해 반응형으로 제작하였습니다.",
    sourceURL: "https://github.com/junheeLee96/react-tube",
    projectURL: "https://junyoutube.netlify.app",
  },
  {
    id: 1,
    vid: [First_1, First_2, First_3, First_4],
    title: "소설 플랫폼 CRUD 클론 코딩",
    while: "(약 3주)",
    content:
      " React.js, Node.js, Mysql과 Firebase를 이용한 웹입니다. \n\n '나만의 웹 소설 플랫폼을 갖고 싶다'라는 생각으로 시작한 프로젝트입니다.\n\n 실제 제가 이용하는 웹소설 플랫폼을 클론코딩하였고, ContextAPI로 props drilling을 최소화하며 CRUD시스템을 만들었습니다. \n\n  홈화면에 슬라이더 기능을 넣어 최근 업데이트 된 소설을 볼 수 있게 설정했고, 페이지네이션 기능을 추가해 컴포넌트의 렌더링을 최소화했습니다.",
    sourceURL: "https://github.com/junheeLee96/react-novel-app",
  },
  {
    id: 2,
    vid: [Twitter_1, Twitter_2, Twitter_3],
    title: "SNS 클론코딩",
    while: "(약 1주)",
    content:
      "React.js와 Firebase를 이용한 웹입니다. \n\n Firebase의 DataBase를 이용하며 정형화된 SQL이 아닌 NoSQL을 학습했습니다.",
    sourceURL: "https://github.com/junheeLee96/twitter-app",
    projectURL: "https://junheelee96.github.io/twitter-app/",
  },
  {
    id: 3,
    vid: [chat1, chat2],
    title: "채팅 웹",
    while: "(약 1주)",
    content:
      "Node.js와 Socket.io, MySQL을 이용한 채팅 웹입니다. \n\n '나만의 꿈'을 실현하기 위한 여정 중 웹 브라우저의 동작, 백엔드와의 통신을 깊이 이해하기 위해 시작한 프로젝트입니다.",
    sourceURL: "https://github.com/junheeLee96/Nodejs-chatting",
  },
  {
    id: 4,
    vid: [game],
    title: "크롬 게임",
    while: "(하루)",
    content:
      "순수 자바스크립트를 이용하여 만든 게임입니다. \n\n 순수 자바스크립트를 익힌 후, '무언가 만들고 싶다.'라는 생각이 들었을 때, \n 휴대폰 크롬 브라우저의 인터넷 연결이 끊기며 크롬게임을 보게되었고 프로젝트가 시작되었습니다. \n HTML의 canvas 태그를 통해 작업하였고, 유저의 점수를 LocalStorage에 저장하여 화면에 반영될 수 있도록 하였습니다.",
    sourceURL: "https://github.com/junheeLee96/chromeGame",
    projectURL: "https://junheelee96.github.io/chromeGame/",
  },
  {
    id: 5,
    vid: [momen],
    title: "Momentum 웹",
    while: "(일주일)",
    content:
      "순수 자바스크립트를 이용하여 만든 웹입니다. \n 자바스크립트를 배운 후, 유튜버 노마드 님의 강의 영상을 보며 처음 만든 웹입니다.\n 유저, To-Do List 등의 정보를 LocalStorage를 통해 저장하였고, \n 날씨 API를 통해 사용자의 위치와 날씨를 나타냈습니다.",
    sourceURL: "https://github.com/junheeLee96/momentum",
    projectURL: "https://junheelee96.github.io/momentum/",
  },
];

const ThirdPAge = ({ ThirdPageRef }) => {
  return (
    <div
      className="ThirdPAge bg-cyan-600	 w-screen  flex flex-col justify-center items-center  z-2 !important"
      ref={ThirdPageRef}
    >
      {/* <Th_ZeroBlock />
      <Th_firstBlock />
      <Th_SecBlock />
      <Th_ThirdBlock />
      <Th_Fth />
      <Th_Fifth /> */}

      {arr.map((item, idx) => (
        <div
          key={idx}
          className="bg-white shadow-2xl 	mb-14 lg:w-[900px] lg:min-h-[10px] w-[100vw] h-[90%] mt-14 flex flex-col	 justify-center items-center justify-between transform t 0.3s "
        >
          <div className="w-full h-[20%] pl-[1vw] pr-[1vw] flex flex-col justify-center items-center ">
            <div>{item.title}</div>
            <div>{item.while}</div>
          </div>
          <div className="w-full h-[75%] lg:grid lg:grid-cols-2 lg:gap-x-[5%] pl-[1vw] pt-[5%] pr-[1vw] flex flex-col-reverse">
            <p className="lg:pt-0 pt-[2%]  pb-3">
              {item.content.split("\n").map((line) => {
                return (
                  <span>
                    {line}
                    <br />
                  </span>
                );
              })}
              <br />
              <br />
              <a href={item.sourceURL} target={`_blank`}>
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg p-2">
                  {" "}
                  Source Code{" "}
                </button>
              </a>
              <br />
              {item.sourceURL && (
                <a href={item.sourceURL} target={`_blank`}>
                  <button className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg p-2 mt-2">
                    {" "}
                    Watch the project{" "}
                  </button>
                </a>
              )}
            </p>

            <Video video={item.vid} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThirdPAge;
