import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { DoubleSide, TextureLoader, type Mesh } from "three";
import { sunDetails } from "../constants";

export const SunMesh = () => {
  const sunRef = useRef<Mesh>(null);
  const sunTexture = useLoader(TextureLoader, sunDetails.texture);

  useFrame(() => {
    if (!sunRef.current) return;
    sunRef.current.rotation.y += sunDetails.rotationSpeed;
  });

  return (
    <mesh ref={sunRef}>
      <sphereGeometry args={sunDetails.size} />
      <meshBasicMaterial map={sunTexture} side={DoubleSide} />
    </mesh>
  );
};
