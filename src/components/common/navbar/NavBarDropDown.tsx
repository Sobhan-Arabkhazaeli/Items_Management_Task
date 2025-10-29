import type { NavbarItems } from "../../../core/constants/menu-navbar";
import { DropdownItem } from "@heroui/react";
import { NavLink } from "react-router-dom";

/**
 * Helper function to render a navigation item
 * @param item - Navbar item data
 * @param isMobile - flag to indicate if we are rendering mobile dropdown item
 * @returns JSX element for the nav item
 *
 * Why this helper:
 * - Avoid code repetition (DRY principle)
 * - Keep semantic structure consistent for desktop and mobile
 * - Handles active styling in one place
 */
const renderNavItem = (item: (typeof NavbarItems)[0], isMobile = false) => {
  const Icon = item.icon;

  // JSX content for icon + text, same for mobile and desktop
  const linkContent = (
    <div className={`flex items-center gap-2 ${isMobile ? "" : "gap-1"}`}>
      <Icon size={18} aria-label={item.ariaLabel} />
      <span className={isMobile ? "" : "text-lg"}>{item.title}</span>
    </div>
  );

  if (isMobile) {
    // Mobile dropdown item
    // Using `asChild` to preserve semantic NavLink inside DropdownItem
    return (
      <DropdownItem key={item.id}>
        <NavLink
          to={item.path}
          className={({ isActive }) => (isActive ? "text-surface" : "")}
        >
          {linkContent}
        </NavLink>
      </DropdownItem>
    );
  }

  // Desktop nav item in a semantic list
  return (
    <li key={item.id}>
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          `flex items-center gap-1 cursor-pointer ${
            isActive ? "text-surface" : ""
          }`
        }
      >
        {linkContent}
      </NavLink>
    </li>
  );
};
export default renderNavItem;
