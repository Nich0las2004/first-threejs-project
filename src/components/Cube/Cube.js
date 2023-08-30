import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Cube = () => {
  const cubeRef = useRef();

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.y += 0.01;
      cubeRef.current.rotation.z += 0.01;
      
    }
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry position={[1, 1, 1]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
};

export default Cube;
