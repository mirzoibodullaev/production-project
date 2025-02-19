import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { Button, ButtonTheme } from "shared/ui/Button/ui/Button";
import { SidebarItemList } from "../model/items";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

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
                {SidebarItemList.map((item) => (
                    <SidebarItem
                        item={item}
                        collapsed={collapsed}
                        key={item.path}
                    />
                ))}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </aside>
    );
};
