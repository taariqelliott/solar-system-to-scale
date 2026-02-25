import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { DoubleSide, TextureLoader, type Mesh } from "three";
import { Planet, SUNSIZE } from "../constants";

export const EarthMesh = () => {
  const earthDetails = new Planet(
    [SUNSIZE / 109, 200, 200],
    [60, 0, 0],
    "/public/planet-textures/Solarsystemscope_texture_2k_earth_daymap.jpg",
    -0.002
  );
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
