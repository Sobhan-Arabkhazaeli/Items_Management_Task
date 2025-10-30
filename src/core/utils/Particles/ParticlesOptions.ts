import type { ISourceOptions } from "@tsparticles/engine";

/**
 
 * Why:
 * - The particle background color changes dynamically based on theme
 * - Kept type-safe using ISourceOptions from tsparticles
 */
export const ParticlesOptions = (theme: string): ISourceOptions => {
  return{
  background: {
    color: { value: theme === "dark" ? "#0b1220" : "#fff" },
  },
  fullScreen: { enable: true, zIndex: -1 },
  fpsLimit: 160,
  particles: {
    number: { value: 100, density: { enable: true} },
    color: { value: theme === "dark" ? "#fff" : "#0b1220" },
    shape: { type: "circle" },
    opacity: { value: 0.8 },
    size: { value: { min: 2, max: 3 } },
    move: {
      enable: true,
      speed: 3.5,
      direction: "none",
      random: true,
      outModes: { default: "out" },
    },
  },
  detectRetina: true,
};
};
