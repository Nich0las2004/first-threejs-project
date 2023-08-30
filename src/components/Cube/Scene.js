import { Canvas } from "@react-three/fiber";

import Cube from "./Cube";

const Scene = () => {

  return (
    <Canvas style={{ background: "black" }}>
      <ambientLight intensity={0.5} color="white" />
      <pointLight position={[1, 1, 1]} />
      <Cube />
    </Canvas>
  );
};

export default Scene;
