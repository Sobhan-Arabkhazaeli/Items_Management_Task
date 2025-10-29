import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ParticlesOptions } from "./ParticlesOptions";
import { useTheme } from "../../hooks/theme/useTheme";

/**
 * Renders animated particles in the background
 * - Initializes the tsparticles engine once
 * - Adapts color scheme to the user's theme
 */
const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  // Retrieve theme from local storage
  const theme = (useTheme() as string) || "light";

  // Initialize the particle engine on component mount
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Render only after initialization
  if (!init) return null;

  return (
    <div className="fixed inset-0 -z-10" aria-hidden="true">
      <Particles id="tsparticles" options={ParticlesOptions(theme)} />
    </div>
  );
};

export default ParticlesBackground;
