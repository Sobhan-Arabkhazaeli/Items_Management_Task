import { Button } from "@heroui/react";
import { useTheme } from "../../../core/hooks/theme/useTheme";
// icons
import { TiWeatherSunny } from "react-icons/ti";
import { FaMoon } from "react-icons/fa6";

const DarkModeButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      isIconOnly
      aria-label="switch the mood"
      variant="flat"
      size="lg"
      radius="full"
      className="bg-primary p-1"
    >
      {theme === "dark" ? (
        <TiWeatherSunny color="#fff" aria-label="switch to light" />
      ) : (
        <FaMoon color="#000" aria-label="switch to dark" />
      )}
    </Button>
  );
};

export default DarkModeButton;
