import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { DoubleSide, TextureLoader, type Mesh } from "three";
import { earthDetails } from "../constants";

export const EarthMesh = () => {
  const earthTexture = useLoader(TextureLoader, earthDetails.texture);
  const earthRef = useRef<Mesh>(null);

  useFrame(() => {
    if (!earthRef.current) return;
    earthRef.current.rotation.y += earthDetails.rotationSpeed;
  });

  return (
    <mesh ref={earthRef} position={earthDetails.position}>
      <sphereGeometry args={earthDetails.size} />
      <meshBasicMaterial map={earthTexture} side={DoubleSide} />
    </mesh>
  );
};
