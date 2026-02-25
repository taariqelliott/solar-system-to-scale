import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { DoubleSide, TextureLoader, type Mesh } from "three";
import { moonDetails } from "../constants";

export const MoonMesh = () => {
  const moonTexture = useLoader(TextureLoader, moonDetails.texture);
  const moonRef = useRef<Mesh>(null);

  useFrame(() => {
    if (!moonRef.current) return;
    moonRef.current.rotation.y += moonDetails.rotationSpeed;
  });

  return (
    <mesh ref={moonRef} position={moonDetails.position}>
      <sphereGeometry args={moonDetails.size} />
      <meshBasicMaterial map={moonTexture} side={DoubleSide} />
    </mesh>
  );
};
