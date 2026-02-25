import { PerspectiveCamera, TrackballControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { EarthMesh } from "./planets/EarthMesh";
import { SunMesh } from "./planets/SunMesh";

export default function App() {
  return (
    <Canvas>
      <Suspense>
        <TrackballControls />
        <PerspectiveCamera
          makeDefault
          position={[100, 0, 0]}
          args={[75, 1, 0.1, 2000000]}
        />
        <SunMesh />
        <EarthMesh />
      </Suspense>
    </Canvas>
  );
}
