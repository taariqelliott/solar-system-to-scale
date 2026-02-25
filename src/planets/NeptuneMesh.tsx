import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { DoubleSide, TextureLoader, type Mesh } from "three";
import { neptuneDetails } from "../constants";

export const NeptuneMesh = () => {
  const neptuneTexture = useLoader(TextureLoader, neptuneDetails.texture);
  const neptuneRef = useRef<Mesh>(null);

  useFrame(() => {
    if (!neptuneRef.current) return;
    neptuneRef.current.rotation.y += neptuneDetails.rotationSpeed;
  });

  return (
    <mesh ref={neptuneRef} position={neptuneDetails.position}>
      <sphereGeometry args={neptuneDetails.size} />
      <meshBasicMaterial map={neptuneTexture} side={DoubleSide} />
    </mesh>
  );
};
