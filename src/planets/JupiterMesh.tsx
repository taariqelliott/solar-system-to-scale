import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { DoubleSide, TextureLoader, type Mesh } from "three";
import { jupiterDetails } from "../constants";

export const JupiterMesh = () => {
  const jupiterTexture = useLoader(TextureLoader, jupiterDetails.texture);
  const jupiterRef = useRef<Mesh>(null);

  useFrame(() => {
    if (!jupiterRef.current) return;
    jupiterRef.current.rotation.y += jupiterDetails.rotationSpeed;
  });

  return (
    <mesh ref={jupiterRef} position={jupiterDetails.position}>
      <sphereGeometry args={jupiterDetails.size} />
      <meshBasicMaterial map={jupiterTexture} side={DoubleSide} />
    </mesh>
  );
};
