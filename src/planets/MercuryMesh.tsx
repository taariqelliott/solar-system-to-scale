import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { DoubleSide, TextureLoader, type Mesh } from "three";
import { mercuryDetails } from "../constants";

export const MercuryMesh = () => {
  const mercuryTexture = useLoader(TextureLoader, mercuryDetails.texture);
  const mercuryRef = useRef<Mesh>(null);

  useFrame(() => {
    if (!mercuryRef.current) return;
    mercuryRef.current.rotation.y += mercuryDetails.rotationSpeed;
  });

  return (
    <mesh ref={mercuryRef} position={mercuryDetails.position}>
      <sphereGeometry args={mercuryDetails.size} />
      <meshBasicMaterial map={mercuryTexture} side={DoubleSide} />
    </mesh>
  );
};
