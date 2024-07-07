import React, { useEffect, useRef } from "react";
import configureWheel from "./WheelConf";

function Wheel(props) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      configureWheel(containerRef.current);
    }
  }, []);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
      }}
      className="wheel-container"
      ref={containerRef}
    ></div>
  );
}

export default Wheel;
