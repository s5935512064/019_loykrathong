import { useEffect, useRef } from "react";

type AnimationFrameCallback = (delta: number) => void;
type StopCallback = (delta: number) => boolean;

export const useAnimationFrame = (
  callback: AnimationFrameCallback,
  shouldStop: StopCallback,
  shouldStart: boolean = true
) => {
  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  const requestRef = useRef<undefined | number>();
  const previousTimeRef = useRef<undefined | number>();

  const animate = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      // delta time in millisecs
      const deltaTime = time - previousTimeRef.current;

      if (shouldStop(deltaTime))
        cancelAnimationFrame(requestRef.current as number);
      else callback(deltaTime);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (shouldStart) {
      requestRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(requestRef.current as number);
    }
  }, [shouldStart]); // Make sure the effect runs only once

  return requestRef.current;
};
