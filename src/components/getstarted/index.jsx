import React, { useState, useEffect } from "react";
import Intro from "../../images/illustration-intro.png";
import CurvyBgMb from "../../images/bg-curvy-mobile.svg";
import CurvyBg from "../../images/bg-curvy-desktop.svg";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function getstarted() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="gs-container">
      <img className="gs-image" src={Intro} alt="people" />
      <img
        className="gs-bg-image"
        src={windowDimensions.width <= 375 ? CurvyBgMb : CurvyBg}
        alt="bg curved"
      />
      <div>
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <div className="info-container">
          <p>
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
}
