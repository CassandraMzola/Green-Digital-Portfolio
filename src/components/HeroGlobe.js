import React from "react";
import Lottie from "lottie-react";
import globeAnimation from "@/assets/animations/globe.json";

const HeroGlobe = () => {
  return (
    <div className="w-72 h-72 md:w-96 md:h-96">
      <Lottie animationData={globeAnimation} loop={true} />
    </div>
  );
};

export default HeroGlobe;
