import { PerspectiveCamera, TrackballControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  DepthOfField,
  EffectComposer,
  Noise,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Suspense } from "react";
import { EarthMesh } from "../planets/EarthMesh";
import { JupiterMesh } from "../planets/JupiterMesh";
import { MarsMesh } from "../planets/MarsMesh";
import { MercuryMesh } from "../planets/MercuryMesh";
import { NeptuneMesh } from "../planets/NeptuneMesh";
import { SaturnMesh } from "../planets/SaturnMesh";
import { StarsMesh } from "../planets/StarsMesh";
import { SunMesh } from "../planets/SunMesh";
import { UranusMesh } from "../planets/UranusMesh";
import { VenusMesh } from "../planets/VenusMesh";

export default function SolarSystem() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <EffectComposer>
          <Noise
            premultiply
            blendFunction={BlendFunction.OVERLAY}
            opacity={0.75}
          />
          <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={1} />
          <TrackballControls noPan zoomSpeed={0.1} dynamicDampingFactor={0.1} />
          <PerspectiveCamera
            makeDefault
            position={[20000, 0, 0]}
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
          <StarsMesh />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
