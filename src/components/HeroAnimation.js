
import React from "react";
import Lottie from "lottie-react";
import globeAnimation from "../assets/animations/globe.json"; 

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
