import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Foot = ({ FootRef }) => {
  return (
    <div
      className="w-[100vw] h-[10vh] bg-black text-white flex  flex-col justify-center items-center"
      ref={FootRef}
    >
      <a href="https://github.com/junheeLee96" target={`_blank`}>
        <FontAwesomeIcon
          icon={faGithub}
          style={{ fontSize: "30px", paddingBottom: "10px" }}
        />
      </a>
      <div className="opacity-[0.7]">
        Copyright &copy; 2022 LeeJunHee. All rights reserved.
      </div>
    </div>
  );
};

export default Foot;
