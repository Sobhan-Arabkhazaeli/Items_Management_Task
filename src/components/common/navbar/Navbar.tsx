import { NavbarItems } from "../../../core/constants/menu-navbar";
import { Dropdown, DropdownTrigger, DropdownMenu, Button } from "@heroui/react";
import renderNavItem from "./NavBarDropDown";

//icons
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    // Main navigation wrapper for accessibility and SEO
    <nav aria-label="Main Navigation">
      {/* Desktop horizontal navbar */}
      {/* Hidden on small screens, flex layout on md+ */}
      <ul className="hidden md:flex gap-6 items-center">
        {NavbarItems.map((item) => renderNavItem(item))}
      </ul>

      {/* Mobile dropdown menu */}
      {/* Visible only on small screens, replaces horizontal navbar for better UX */}
      <div className="md:hidden">
        <Dropdown>
          {/* Trigger button for mobile menu */}
          <DropdownTrigger>
            <Button
              variant="faded"
              radius="full"
              size="md"
              aria-label="Open menu"
            >
              <IoMdMenu size={"20px"} />
            </Button>
          </DropdownTrigger>

          {/* Dropdown menu items */}
          <DropdownMenu aria-label="Mobile Navigation">
            {NavbarItems.map((item) => renderNavItem(item, true))}
          </DropdownMenu>
        </Dropdown>
      </div>
    </nav>
  );
};

export default Navbar;
