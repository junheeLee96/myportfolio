import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

const Video = ({ video, idx }) => {
  const [vidIndex, setVidIndex] = useState(0);

  const onNavBtnClick = (index) => {
    if (index < 0) {
      index = video.length - 1;
    }
    if (index >= video.length) {
      index = 0;
    }
    setVidIndex(index);
  };

  return (
    <>
      <div className="`w-full h-fit whitespace-nowrap overflow-hidden flex flex-col justify-center items-center">
        <div
          className={`min-w-full inline-block min-h-full flex whitespace-nowrap items-stretch	 duration-300`}
          style={{ transform: `translateX(-${vidIndex * 100}%)` }}
        >
          {video.map((video, idx) => (
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
        <div className="text-[150%] flex flex-row mt-[15px]">
          <FontAwesomeIcon
            icon={faArrowAltCircleLeft}
            className="cursor-pointer pr-[3%]"
            onClick={() => {
              onNavBtnClick(vidIndex - 1);
            }}
            style={vidIndex + 1 === 1 ? { display: "none" } : ""}
          />
          <div className="relative bottom-[7px]">
            {vidIndex + 1}/{video.length}
          </div>
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            className="cursor-pointer pl-[3%]"
            onClick={() => {
              onNavBtnClick(vidIndex + 1);
            }}
            style={vidIndex + 1 === video.length ? { display: "none" } : ""}
          />
        </div>
      </div>
    </>
  );
};

export default Video;
