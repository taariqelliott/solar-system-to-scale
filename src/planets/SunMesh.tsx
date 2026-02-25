import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { DoubleSide, TextureLoader, type Mesh } from "three";
import { Planet, SUNSIZE } from "../constants";

export const SunMesh = () => {
  const sunDetails = new Planet(
    [SUNSIZE, 200, 200],
    [20, 20, 20],
    "/planet-textures/Solarsystemscope_texture_2k_sun.jpg",
    0.0001
  );
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
