"use client";

import { useEffect, useSyncExternalStore } from "react";
import {
  getLightMotionServerSnapshot,
  getLightMotionSnapshot,
  subscribeLightMotion,
} from "@/lib/motion-preference";

export function MotionPreferenceSync() {
  const lightMotion = useSyncExternalStore(
    subscribeLightMotion,
    getLightMotionSnapshot,
    getLightMotionServerSnapshot,
  );

  useEffect(() => {
    document.documentElement.toggleAttribute("data-light-motion", lightMotion);
  }, [lightMotion]);

  return null;
}
