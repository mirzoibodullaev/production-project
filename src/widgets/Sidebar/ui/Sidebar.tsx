import { useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { Button, ButtonTheme } from "shared/ui/Button/ui/Button";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/ui/AppLink";
import { RouterPath } from "shared/config/routeConfig/routeConfig";
import MainIcon from "shared/assets/icons/home.svg";
import AboutIcon from "shared/assets/icons/about.svg";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <aside
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                square
                theme={ButtonTheme.BACKGROUND_INVERTED}
                className={cls.collapseBtn}
                onClick={onToggle}
                data-testid="toggle-btn"
            >
                {collapsed ? ">" : "<"}
            </Button>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RouterPath.main}
                    className={cls.link}
                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.itemLink}>{t("Главная")}</span>
                </AppLink>
                <AppLink
                    className={cls.link}
                    theme={AppLinkTheme.SECONDARY}
                    to={RouterPath.about}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.itemLink}>{t("О сайте")}</span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </aside>
    );
};
