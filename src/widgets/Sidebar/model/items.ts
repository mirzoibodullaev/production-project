import { RouterPath } from "shared/config/routeConfig/routeConfig";
import MainIcon from "shared/assets/icons/home.svg";
import AboutIcon from "shared/assets/icons/about.svg";
import ProfileIcon from "shared/assets/icons/profile-icon.svg";

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemList: SidebarItemType[] = [
    {
        path: RouterPath.main,
        Icon: MainIcon,
        text: "Главная",
    },
    {
        path: RouterPath.about,
        Icon: AboutIcon,
        text: "О сайте",
    },
    {
        path: RouterPath.profile,
        Icon: ProfileIcon,
        text: "Профиль",
    },
];
