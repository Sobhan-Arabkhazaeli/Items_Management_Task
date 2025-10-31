import type { NavbarItems } from "../../../core/constants/menu-navbar";
import { DropdownItem } from "@heroui/react";
import { NavLink } from "react-router-dom";

const renderNavItem = (item: (typeof NavbarItems)[0], isMobile = false) => {
  const Icon = item.icon;

  // Shared link layout: icon + title
  const linkContent = (
    <div
      className={`flex items-center gap-3 ${
        isMobile ? "py-2 px-3" : ""
      } transition-all duration-300`}
    >
      <Icon
        size={20}
        aria-label={item.ariaLabel}
        className="text-primary transition-colors duration-300"
      />
      <span
        className={`font-medium transition-colors duration-300 ${
          isMobile ? "text-text" : "text-text"
        }`}
      >
        {item.title}
      </span>
    </div>
  );

  // Render dropdown item for mobile view
  if (isMobile) {
    return (
      <DropdownItem
        key={item.id}
        className="glass-menu-item data-[hover=true]:glass-menu-item-hover rounded-lg transition-all duration-300 hover:scale-105"
        textValue={item.title}
      >
        {/* NavLink handles active state styling */}
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            `w-full block transition-all duration-300 ${
              isActive ? "text-primary bg-primary/10 rounded-lg shadow-md" : ""
            }`
          }
        >
          {linkContent}
        </NavLink>
      </DropdownItem>
    );
  }
  // Render standard navbar item for desktop
  return (
    <li key={item.id}>
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          `flex items-center gap-2 cursor-pointer px-4 py-2.5 rounded-xl transition-all duration-300 transform ${
            isActive
              ? "glass-nav-active text-primary shadow-glass scale-105"
              : "glass-nav-item hover:glass-nav-hover text-text hover:text-primary hover:scale-105"
          }`
        }
      >
        {linkContent}
      </NavLink>
    </li>
  );
};

export default renderNavItem;
