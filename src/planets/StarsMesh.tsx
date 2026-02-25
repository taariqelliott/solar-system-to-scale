import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { DoubleSide, TextureLoader, type Mesh } from "three";
import { starsDetails } from "../constants";

export const StarsMesh = () => {
  const starsRef = useRef<Mesh>(null);
  const starsTexture = useLoader(TextureLoader, starsDetails.texture);

  useFrame(() => {
    if (!starsRef.current) return;
    starsRef.current.rotation.y += starsDetails.rotationSpeed;
  });

  return (
    <mesh ref={starsRef}>
      <sphereGeometry args={starsDetails.size} />
      <meshBasicMaterial map={starsTexture} side={DoubleSide} />
    </mesh>
  );
};
