import { FaStore } from 'react-icons/fa6';
import { MdOutlineFavorite } from "react-icons/md";
import type { INavbar } from "../../types/navbar";

export const NavbarItems: INavbar[] = [
  { id: 1, title: "All Products", path: "/", icon: FaStore, ariaLabel: "redirect to products page" },
  { id: 2, title: "Favorites", path: "/favorites", icon: MdOutlineFavorite, ariaLabel: "redirect to Favorites page" },
];

