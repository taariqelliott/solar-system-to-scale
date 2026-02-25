import {
  PerspectiveCamera,
  TrackballControls,
  type PerspectiveCameraProps,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  DepthOfField,
  EffectComposer,
  Noise,
} from "@react-three/postprocessing";
import { Suspense, useState } from "react";
import { EarthMesh } from "./planets/EarthMesh";
import { JupiterMesh } from "./planets/JupiterMesh";
import { MarsMesh } from "./planets/MarsMesh";
import { MercuryMesh } from "./planets/MercuryMesh";
import { NeptuneMesh } from "./planets/NeptuneMesh";
import { SaturnMesh } from "./planets/SaturnMesh";
import { SunMesh } from "./planets/SunMesh";
import { UranusMesh } from "./planets/UranusMesh";
import { VenusMesh } from "./planets/VenusMesh";
import { BlendFunction } from "postprocessing";

export default function App() {
  const [camPos, setCamPos] = useState<PerspectiveCameraProps["position"]>([
    20000, 0, 0,
  ]);
  const resetCam = () => {
    setCamPos([20000.01, 0, 0]);
  };

  return (
    <>
      {/* <div className="flex items-center justify-center gap-2 absolute top-2 right-2 z-10">
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
      </div> */}
      <Canvas>
        <Suspense fallback={null}>
          <EffectComposer>
            <Noise
              premultiply
              blendFunction={BlendFunction.OVERLAY}
              opacity={0.75}
            />
            <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={1} />
            <TrackballControls
              noPan
              zoomSpeed={0.1}
              dynamicDampingFactor={0.1}
            />
            <PerspectiveCamera
              makeDefault
              position={camPos}
              args={[45, 1, 0.1, 10000000]}
            />
            <SunMesh />
            <MercuryMesh />
            <VenusMesh />
            <EarthMesh />
            <MarsMesh />
            <JupiterMesh />
            <SaturnMesh />
            <UranusMesh />
            <NeptuneMesh />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </>
  );
}
