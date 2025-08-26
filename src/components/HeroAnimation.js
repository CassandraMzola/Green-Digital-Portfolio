// src/components/HeroAnimation.js
import React from "react";
import Lottie from "lottie-react";
import globeAnimation from "../assets/animations/globe.json"; // adjust path if needed

const HeroAnimation = () => {
  return (
    <div className="hero-animation">
      <Lottie 
        animationData={globeAnimation} 
        loop={true} 
        autoplay={true} 
        style={{ width: "700px", height: "700px" }} 
      />
    </div>
  );
};

export default HeroAnimation;
