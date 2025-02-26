import { classNames } from "shared/lib/classNames/classNames";
import { ArticleView } from "../../model/types/article";
import { Card } from "shared/ui/Card/ui/Card";
import { Skeleton } from "shared/ui/Skeleton/ui/Skeleton";
import cls from "./ArticleListItem.module.scss";

interface ArticleListItemProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = ({
    className,
    view,
}: ArticleListItemProps) => {
    if (view === ArticleView.LIST) {
        return (
            <div
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Skeleton height={30} width={30} border="50%" />
                        <Skeleton
                            border="6px"
                            width={150}
                            className={cls.username}
                            height={16}
                        />
                        <Skeleton
                            border="6px"
                            width={150}
                            height={16}
                            className={cls.date}
                        />
                    </div>
                    <Skeleton
                        border="6px"
                        className={cls.title}
                        width={250}
                        height={24}
                    />
                    <Skeleton
                        className={cls.img}
                        border="6px"
                        width={"100%"}
                        height={300}
                    />
                    <div className={cls.footer}>
                        <Skeleton border="6px" height={36} width={200} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.ArticleListItem, {}, [
                className,
                cls[view],
            ])}
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <Skeleton border="6px" width={200} height={200} className={cls.img} />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton border="6px" width={130} height={16} />
                </div>
                <Skeleton border="6px" width={150} height={16} className={cls.title} />
            </Card>
        </div>
    );
};
