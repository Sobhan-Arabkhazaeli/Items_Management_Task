import { Button } from "@heroui/react";
import { useTheme } from "../../../core/hooks/theme/useTheme";
import { TiWeatherSunny } from "react-icons/ti";
import { FaMoon } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../../redux/slices/ChangeTheme";

const DarkModeButton = () => {
  const dispatch = useDispatch();
  const theme = useTheme(); // Get current theme (light or dark)

  return (
    <Button
      // Toggle app theme on click
      onClick={() => dispatch(toggleTheme())}
      isIconOnly
      aria-label="switch theme"
      variant="flat"
      size="lg"
      radius="full"
      className="transition-transform duration-300 ease-in-out hover:scale-125 hover:rotate-12 bg-surface text-primary shadow-md hover:shadow-lg"
    >
      {/* Switch icon based on current theme */}
      {theme === "dark" ? (
        // If dark mode is active → show sun icon to indicate light mode is available
        <TiWeatherSunny
          className="w-6 h-6 text-warning drop-shadow-md transition-colors duration-300"
          aria-label="switch to light"
        />
      ) : (
        // If light mode is active → show moon icon to indicate dark mode is available
        <FaMoon
          className="w-5 h-5 text-primary drop-shadow-md transition-colors duration-300"
          aria-label="switch to dark"
        />
      )}
    </Button>
  );
};

export default DarkModeButton;
