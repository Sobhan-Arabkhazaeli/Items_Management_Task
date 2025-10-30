import { Button } from "@heroui/react";
import { Navbar } from "../../../common";
// icons
import { CiCirclePlus } from "react-icons/ci";

const MenuBox = () => {
  return (
    <div className=" h-3/4 gap-24 chip-primary">
      <Navbar />
      <Button
        className="bg-surface text-white"
        startContent={<CiCirclePlus size={"25px"} />}
        variant="solid"
        size="sm"
        radius="lg"
      >
        Add Product
      </Button>
    </div>
  );
};

export default MenuBox;
