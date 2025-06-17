import React from "react";
import OrbitProgress from "react-loading-indicators/OrbitProgress";

const Loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <OrbitProgress color="#ec3dd8" size="medium" text="" textColor="" />
    </div>
  );
};

export default Loading;
