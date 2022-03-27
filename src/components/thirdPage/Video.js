import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

const Video = ({ item, idx }) => {
  const [vidIndex, setVidIndex] = useState(0);

  const onNavBtnClick = (index) => {
    if (index < 0) {
      index = item.vid.length - 1;
    }
    if (index >= item.vid.length) {
      index = 0;
    }
    setVidIndex(index);
  };

  return (
    <>
      <div className="`w-full h-fit whitespace-nowrap overflow-hidden items-stretch flex flex-col">
        <div
          className={`min-w-full inline-block min-h-full flex whitespace-nowrap items-stretch	 duration-300`}
          style={{ transform: `translateX(-${vidIndex * 100}%)` }}
        >
          {item.vid.map((video, idx) => (
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
              onNavBtnClick(vidIndex - 1);
            }}
          />
          <div className="relative bottom-[7px]">
            {vidIndex + 1}/{item.vid.length}
          </div>
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            className="cursor-pointer pl-[3%]"
            onClick={() => {
              onNavBtnClick(vidIndex + 1);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Video;
