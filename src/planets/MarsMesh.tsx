import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { DoubleSide, TextureLoader, type Mesh } from "three";
import { marsDetails } from "../constants";

export const MarsMesh = () => {
  const marsTexture = useLoader(TextureLoader, marsDetails.texture);
  const marsRef = useRef<Mesh>(null);

  useFrame(() => {
    if (!marsRef.current) return;
    marsRef.current.rotation.y += marsDetails.rotationSpeed;
  });

  return (
    <mesh ref={marsRef} position={marsDetails.position}>
      <sphereGeometry args={marsDetails.size} />
      <meshBasicMaterial map={marsTexture} side={DoubleSide} />
    </mesh>
  );
};
