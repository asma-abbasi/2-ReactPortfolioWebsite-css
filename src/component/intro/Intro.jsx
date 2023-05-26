import React, { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      backSpeed: 60,
      showCursor: true ,
      backDelay: 1500,
      backSpeed: 60,
      showCursor: true,
      strings: ["Developer", "Designer"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imagContainer">
          <img src="assets/1content.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There ,I'm</h2>
          <h1>Asma Abbasi </h1>
          <h3>
           Web
            <span ref={textRef}> </span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/images.png" alt="" />
        </a>
      </div>
    </div>
  );
}
