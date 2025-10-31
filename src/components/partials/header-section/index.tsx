import { DarkModeButton } from "../../common";
import MenuBox from "./menu-box";

const HeaderSection = () => {
  return (
    <div className="w-full h-20 flex justify-center gap-4 items-center z-50 bg-surface/90 backdrop-blur-lg border-b border-border shadow-md transition-all duration-300">
      <DarkModeButton />
      <MenuBox />
    </div>
  );
};

export default HeaderSection;
