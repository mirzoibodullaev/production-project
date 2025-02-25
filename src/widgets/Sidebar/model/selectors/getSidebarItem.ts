import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import { RouterPath } from "shared/config/routeConfig/routeConfig";
import { SidebarItemType } from "../types/sidebar";
import MainIcon from "shared/assets/icons/home.svg";
import AboutIcon from "shared/assets/icons/about.svg";
import ProfileIcon from "shared/assets/icons/profile-icon.svg";
import ArticleIcon from "shared/assets/icons/article.svg";

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const SidebarItemsList: SidebarItemType[] = [
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
    ];

    if (userData) {
        SidebarItemsList.push(
            {
                path: RouterPath.profile + userData.id,
                Icon: ProfileIcon,
                text: "Профиль",
                authOnly: true,
            },
            {
                path: RouterPath.articles,
                Icon: ArticleIcon,
                text: "Статьи",
                authOnly: true,
            }
        );
    }

    return SidebarItemsList;
});
