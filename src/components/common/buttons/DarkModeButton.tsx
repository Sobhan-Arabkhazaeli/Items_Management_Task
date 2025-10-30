import { Button } from "@heroui/react";
import { useTheme } from "../../../core/hooks/theme/useTheme";
// icons
import { TiWeatherSunny } from "react-icons/ti";
import { FaMoon } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../../redux/slices/ChangeTheme";

const DarkModeButton = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <Button
      onClick={() => dispatch(toggleTheme())}
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
