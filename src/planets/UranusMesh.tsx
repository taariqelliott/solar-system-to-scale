import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { DoubleSide, TextureLoader, type Mesh } from "three";
import { uranusDetails } from "../constants";

export const UranusMesh = () => {
  const uranusTexture = useLoader(TextureLoader, uranusDetails.texture);
  const uranusRef = useRef<Mesh>(null);

  useFrame(() => {
    if (!uranusRef.current) return;
    uranusRef.current.rotation.y += uranusDetails.rotationSpeed;
  });

  return (
    <mesh ref={uranusRef} position={uranusDetails.position}>
      <sphereGeometry args={uranusDetails.size} />
      <meshBasicMaterial map={uranusTexture} side={DoubleSide} />
    </mesh>
  );
};
