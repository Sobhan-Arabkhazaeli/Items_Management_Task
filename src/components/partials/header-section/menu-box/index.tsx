import { Navbar } from "../../../common";
import AddProductButton from "./AddProductButton";

const MenuBox = () => {
  return (
    <div className="h-14 gap-8 px-8 py-3 flex items-center justify-between backdrop-blur-xl bg-surface/80 border border-border rounded-xl shadow-md  transition-shadow duration-300">
      <Navbar />
      <AddProductButton />
    </div>
  );
};

export default MenuBox;
