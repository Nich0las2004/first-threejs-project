import React, { useRef } from "react";
import { createRoot, useFrame } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";

import classes from "./Cube.module.css";

const Cube = () => {
  const cubeRef = useRef();

  const cubeMove = () => {
    cubeRef.current.rotation.x += 6;
    cubeRef.current.rotation.y += 3;
    cubeRef.current.rotation.z += 1;
  }

  return (
    <div
      id="canvas-container"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Canvas onClick={cubeMove} style={{ background: "black" }}>
        <ambientLight intensity={0.5} color="white" />
        <pointLight position={[1, 1, 1]} />
        <mesh ref={cubeRef}>
          <boxGeometry position={[1, 1, 1]} />
          <meshStandardMaterial color="white" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Cube;
