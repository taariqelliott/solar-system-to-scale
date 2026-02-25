import {
  PerspectiveCamera,
  TrackballControls,
  type PerspectiveCameraProps,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { EarthMesh } from "./planets/EarthMesh";
import { SunMesh } from "./planets/SunMesh";

export default function App() {
  const [camPos, setCamPos] = useState<PerspectiveCameraProps["position"]>([
    20000, 0, 0,
  ]);
  const resetCam = () => {
    setCamPos([20000.01, 0, 0]);
  };

  return (
    <>
      <div className="flex items-center justify-center gap-2 absolute top-2 right-2 z-10">
        <button className="w-20 h-8 rounded bg-pink-500 text-zinc-100 px-2 py-1 cursor-pointer">
          Sun
        </button>
        <button className="w-20 h-8 rounded bg-pink-500 text-zinc-100 px-2 py-1 cursor-pointer">
          Earth
        </button>
        <button
          onClick={resetCam}
          className="w-20 h-8 rounded bg-pink-500 text-zinc-100 px-2 py-1 cursor-pointer"
        >
          Reset
        </button>
      </div>
      <Canvas>
        <Suspense>
          <TrackballControls noPan />
          <PerspectiveCamera
            makeDefault
            position={camPos}
            args={[45, 1, 0.1, 10000000]}
          />
          <SunMesh />
          <EarthMesh />
        </Suspense>
      </Canvas>
    </>
  );
}
