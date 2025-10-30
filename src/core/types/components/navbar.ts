import type { IconType } from "react-icons/lib";


export interface INavbar {
    id : number;
    title : string;
    path: string;
    icon : IconType ;
    ariaLabel : string;
}