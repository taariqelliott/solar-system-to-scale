import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { DoubleSide, TextureLoader, type Mesh } from "three";
import { saturnDetails } from "../constants";

export const SaturnMesh = () => {
  const saturnTexture = useLoader(TextureLoader, saturnDetails.texture);
  const saturnRef = useRef<Mesh>(null);

  useFrame(() => {
    if (!saturnRef.current) return;
    saturnRef.current.rotation.y += saturnDetails.rotationSpeed;
  });

  return (
    <mesh ref={saturnRef} position={saturnDetails.position}>
      <sphereGeometry args={saturnDetails.size} />
      <meshBasicMaterial map={saturnTexture} side={DoubleSide} />
    </mesh>
  );
};
