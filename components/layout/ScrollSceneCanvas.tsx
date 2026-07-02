"use client";

import { useEffect, useRef } from "react";
import { initParticleScene } from "@/lib/particle-scene";

export function ScrollSceneCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const cleanup = initParticleScene(canvas);
    return cleanup;
  }, []);

  return (
    <canvas
      ref={ref}
      id="scene"
      className="fixed inset-0 w-full h-full z-[1] block pointer-events-none"
      aria-hidden
    />
  );
}
