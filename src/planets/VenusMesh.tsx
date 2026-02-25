import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { DoubleSide, TextureLoader, type Mesh } from "three";
import { venusDetails } from "../constants";

export const VenusMesh = () => {
  const venusTexture = useLoader(TextureLoader, venusDetails.texture);
  const venusRef = useRef<Mesh>(null);

  useFrame(() => {
    if (!venusRef.current) return;
    venusRef.current.rotation.y += venusDetails.rotationSpeed;
  });

  return (
    <mesh ref={venusRef} position={venusDetails.position}>
      <sphereGeometry args={venusDetails.size} />
      <meshBasicMaterial map={venusTexture} side={DoubleSide} />
    </mesh>
  );
};
