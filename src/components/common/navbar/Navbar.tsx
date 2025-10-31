import { NavbarItems } from "../../../core/constants/menu-navbar";
import { Dropdown, DropdownTrigger, DropdownMenu, Button } from "@heroui/react";
import renderNavItem from "./NavBarDropDown";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <nav aria-label="Main Navigation" className="flex items-center">
      <ul className="hidden md:flex gap-8 items-center">
        {NavbarItems.map((item) => renderNavItem(item))}
      </ul>

      <div className="md:hidden">
        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="flat"
              radius="full"
              size="md"
              aria-label="Open menu"
              className="transition-transform duration-300 hover:scale-110 bg-surface text-text shadow-sm"
            >
              <IoMdMenu className="w-5 h-5" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Mobile Navigation"
            className="backdrop-blur-xl bg-surface/90 border border-border rounded-lg transition-all duration-300"
            variant="flat"
          >
            {NavbarItems.map((item) => renderNavItem(item, true))}
          </DropdownMenu>
        </Dropdown>
      </div>
    </nav>
  );
};

export default Navbar;
