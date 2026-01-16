import React from "react";
import Lottie from "lottie-react";
import globeAnimation from "../assets/animations/globe.json"; 

const HeroAnimation = () => {
  return (
    <div className="hero-animation" aria-hidden="true">
      <Lottie 
        animationData={globeAnimation} 
        loop 
        autoplay 
      />
    </div>
  );
};

export default HeroAnimation;
