import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/ui/AppLink";
import { SidebarItemType } from "../model/items";
import cls from "./SidebarItem.module.scss";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";

interface SidebarItemProps {
    item?: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item?.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item?.path || "/"}
            className={classNames(cls.link, { [cls.collapsed]: collapsed })}
        >
            {item?.Icon && <item.Icon className={cls.icon} />}
            <span className={cls.itemLink}>{t(item?.text || "")}</span>
        </AppLink>
    );
};
