import React from "react";
import reactimg from "../../img/react-img.jpg";
import jqimg from "../../img/j-q.png";
import cssimg from "../../img/cssimg.png";
import htmlimg from "../../img/htmlimg.png";
import nodejsimg from "../../img/nodejsimg.jpg";
import mysqlimg from "../../img/mysqlimg.png";
import githubimg from "../../img/githubimg.png";
import herokuimg from "../../img/herokuimg.png";
import reduximg from "../../img/reduximg.png";
import javascriptimg from "../../img/javascriptimg.png";
import firebaseimg from "../../img/firebaseimg.webp";
import qnetimg from "../../img/qnetimg.png";
import li3img from "../../img/li3.png";

const SecondPage = () => {
  const imgStyle = {
    borderRadius: "70%",
    overflow: "hidden",
  };
  return (
    <div className="w-[100vw] flex items-center flex-col pt-[30px] mb-[50px]">
      <div className="text-2xl">ABILITIES</div>
      <div className="lg:w-3/5 w-[93vw] flex justify-around justify-items-center pt-[40px] shadow-2xl">
        <div className="flex flex-col justify-center items-center ">
          <div className="text-lg">Front-End</div>
          <div className="flex items-center flex-col text-sm">
            <img
              src={reactimg}
              alt=""
              style={{ borderRadius: "70%", overflow: "hidden" }}
              className="lg:w-[3vw] lg:h-[5vh] w-[6vw] h-[4vh] mt-[15%]"
            />
            <div>React.js</div>
          </div>
          <div className="flex items-center flex-col text-sm">
            <img
              src={jqimg}
              alt=""
              style={imgStyle}
              className="lg:w-[3vw] lg:h-[5vh] w-[6vw] h-[4vh] mt-[15%]"
            />
            <div>jQuery</div>
          </div>
          <div className="flex items-center flex-col text-sm">
            <img
              src={javascriptimg}
              alt=""
              style={imgStyle}
              className="lg:w-[3vw] lg:h-[5vh] w-[6vw] h-[4vh] mt-[15%]"
            />
            <div>JavaScript</div>
          </div>
          <div className="flex items-center flex-col text-sm">
            <img
              src={cssimg}
              alt=""
              style={imgStyle}
              className="lg:w-[3vw] lg:h-[5vh] w-[6vw] h-[4vh] mt-[15%]"
            />
            <div>Css</div>
          </div>
          <div className="flex items-center flex-col text-sm ">
            <img
              src={htmlimg}
              alt=""
              style={imgStyle}
              className="lg:w-[3vw] lg:h-[5vh] w-[6vw] h-[4vh] mt-[15%]"
            />
            <div>HTML</div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-lg">Back-End</div>
          <div className="flex items-center flex-col text-sm">
            <img
              src={nodejsimg}
              alt=""
              style={imgStyle}
              className="lg:w-[3vw] lg:h-[5vh] w-[6vw] h-[4vh] mt-[15%]"
            />
            <div>Node.js</div>
          </div>
          <div className="flex items-center flex-col text-sm">
            <img
              src={mysqlimg}
              alt=""
              style={imgStyle}
              className="lg:w-[3vw] lg:h-[5vh] w-[6vw] h-[4vh] mt-[15%]"
            />
            <div>MySQL</div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-lg">ETC</div>
          <div className="flex items-center flex-col text-sm">
            <img
              src={githubimg}
              alt=""
              style={imgStyle}
              className="lg:w-[3vw] lg:h-[5vh] w-[6vw] h-[4vh] mt-[15%]"
            />
            <div>GitBub</div>
          </div>
          <div className="flex items-center flex-col text-sm">
            <img
              src={firebaseimg}
              alt=""
              style={imgStyle}
              className="lg:w-[3vw] lg:h-[5vh] w-[6vw] h-[4vh] mt-[15%]"
            />
            <div>Firebase</div>
          </div>
          <div className="flex items-center flex-col text-sm">
            <img
              src={qnetimg}
              alt=""
              style={imgStyle}
              className="lg:w-[3vw] lg:h-[5vh] w-[6vw] h-[4vh] mt-[15%]"
            />
            <div>정보처리기사</div>
          </div>
          <div className="flex items-center flex-col text-sm">
            <img
              src={li3img}
              alt=""
              style={imgStyle}
              className="lg:w-[3vw] lg:h-[5vh] w-[6vw] h-[4vh] mt-[15%]"
            />
            <div>리눅스마스터2급</div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-lg">Learning</div>
          <div className="flex items-center flex-col text-sm">
            <img
              src={reduximg}
              alt=""
              style={imgStyle}
              className="lg:w-[3vw] lg:h-[5vh] w-[6vw] h-[4vh] mt-[15%]"
            />
            <div>Redux</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
