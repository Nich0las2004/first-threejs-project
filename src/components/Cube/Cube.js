import React from "react";
import { createRoot } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";

import classes from "./Cube.module.css";

const Cube = () => {
  return (
    <div id="canvas-container"
    style={{
      width: "100vw",
      height: "100vh"
    }}
    >
      <Canvas 
      style={{background: "lightgrey"}}
      >
          <boxGeometry />
      </Canvas>
    </div>
  );
};

export default Cube;
