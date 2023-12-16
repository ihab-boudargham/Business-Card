import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Info() {
  return (
    <>
    <body>
      <header className=" card color rounded-t-xl ">
        <div>
          <img className="flex w-54 rounded-t-xl" src="/Profile.jpg" alt="Profile"/>
          <h1 className="name px-3 pt-2 pb-1 text-center text-xl font-bold"> Ihab Bou Dargham</h1>
          <p className="position text-center text-sm font-color">Junior Web Developer</p>
          <p className="email p-1 text-center text-sm">ihab.boudargham@hitmail.com</p>
        </div>
        <div className="flex pt-4 justify-around px-4">
          <button className = "bg-gray-300 rounded-lg w-24 h-9 text-black text-sm"><FontAwesomeIcon icon={faEnvelope} className="info--icon pr-2" />Email</button>
          <button className = "bg-blue-600 rounded-lg w-24 h-9 text-sm"><FontAwesomeIcon icon={faLinkedin} className="info--icon pr-1" />LinkedIn</button>
        </div>
      </header>
    </body>
    </>
  );
}

export default Info;
