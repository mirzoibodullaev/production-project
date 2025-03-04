import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Select, SelectOptions } from "shared/ui/Select/ui/Select";
import { ArticleSortField } from "../../model/types/article";
import { SortOrder } from "shared/types";
import cls from "./AritcleSortSelector.module.scss"

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = ({
    className,
    sort,
    order,
    onChangeOrder,
    onChangeSort,
}: ArticleSortSelectorProps) => {
    const { t } = useTranslation("article");

    const orderOptions = useMemo<SelectOptions<SortOrder>[]>(
        () => [
            {
                value: "asc",
                content: t("возрастанию"),
            },
            {
                value: "desc",
                content: t("убыванию"),
            },
        ],
        [t]
    );

    const sortFieldOptions = useMemo<SelectOptions<ArticleSortField>[]>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: t("дате созданию"),
            },
            {
                value: ArticleSortField.TITLE,
                content: t("названию"),
            },
            {
                value: ArticleSortField.VIEWS,
                content: t("просмотрам"),
            },
        ],
        [t]
    );

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select className={cls.sort} onChange={onChangeSort} value={sort} options={sortFieldOptions} label={t("Сортировать ПО")} />
            <Select className={cls.order} onChange={onChangeOrder} value={order} options={orderOptions} label={t("по")} />
        </div>
    );
};