import { ReactNode, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Card, CardTheme } from "shared/ui/Card/ui/Card";
import cls from "./Tabs.module.scss";

export interface TabItem<T extends string> {
    value: T;
    content: ReactNode;
}

interface TabsProps<T extends string> {
    className?: string;
    tabs: TabItem<T>[];
    value: T;
    onTabClick: (value: T) => void;
}

export const Tabs = <T extends string>({
    className,
    tabs,
    value,
    onTabClick,
}: TabsProps<T>) => {
    const clickHandle = useCallback(
        (tabValue: T) => () => {
            onTabClick(tabValue);
        },
        [onTabClick]
    );

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINE}
                    key={tab.value}
                    className={cls.tab}
                    onClick={clickHandle(tab.value)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
};