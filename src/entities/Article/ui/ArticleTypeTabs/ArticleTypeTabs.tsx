import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Tabs } from "shared/ui/Tabs/ui/Tabs";
import { ArticleType } from "entities/Article/model/types/article";
import { SelectOptions } from "shared/ui/Select/ui/Select";

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = ({
    className,
    value,
    onChangeType,
}: ArticleTypeTabsProps) => {
    const { t } = useTranslation("article");

    const typeTabs = useMemo<SelectOptions<ArticleType>[]>(
        () => [
            {
                value: ArticleType.ALL,
                content: t("Все статьи"),
            },
            {
                value: ArticleType.IT,
                content: t("ИТ"),
            },
            {
                value: ArticleType.FRONTEND,
                content: t("Фронтенд"),
            },
            {
                value: ArticleType.BACKEND,
                content: t("Бэкенд"),
            },
            {
                value: ArticleType.PROGRAMMING,
                content: t("Программирование"),
            },
        ],
        [t]
    );

    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onChangeType}
            className={classNames("", {}, [className])}
        />
    );
};