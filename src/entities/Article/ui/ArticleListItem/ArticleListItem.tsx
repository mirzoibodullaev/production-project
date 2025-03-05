import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import {
    Article,
    ArticleBlockType,
    ArticleTextBlock,
    ArticleView,
} from "../../model/types/article";
import { Card } from "shared/ui/Card/ui/Card";
import { Avatar } from "shared/ui/Avatar/ui/Avatar";
import { Button, ButtonTheme } from "shared/ui/Button/ui/Button";
import { ArticleTextComponent } from "../ArticleTextComponent/ArticleTextComponent";
import { RouterPath } from "shared/config/routeConfig/routeConfig";
import EyeIcon from "shared/assets/icons/eyeIcon.svg";
import cls from "./ArticleListItem.module.scss";
import { AppLink } from "shared/ui/AppLink/ui/AppLink";

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
}

export const ArticleListItem = ({
    className,
    article,
    view,
}: ArticleListItemProps) => {
    const { t } = useTranslation("article");

    if (view === ArticleView.LIST) {
        const textBlock = article?.blocks?.find(
            (block) => block.type === ArticleBlockType.TEXT
        ) as ArticleTextBlock;
        return (
            <div
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <span className={cls.username}>
                            {article.user.username}
                        </span>
                        <span className={cls.date}>{article.createdAt}</span>
                    </div>
                    <h3 className={cls.title}>{article.title}</h3>
                    <p className={cls.types}>{article.type.join(", ")}</p>
                    <img
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                    />
                    {textBlock && (
                        <ArticleTextComponent
                            className={cls.textBlock}
                            block={textBlock}
                        />
                    )}
                    <div className={cls.footer}>
                        <AppLink to={RouterPath.article_details + article.id}>
                            <Button theme={ButtonTheme.OUTLINE}>
                                {t("Читать далее...")}
                            </Button>
                        </AppLink>
                        <span className={cls.views}>
                            {String(article.views)}
                        </span>
                        <EyeIcon className={cls.icon} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            to={RouterPath.article_details + article.id}
            className={classNames(cls.ArticleListItem, {}, [
                className,
                cls[view],
            ])}
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <img
                        alt={article.title}
                        src={article.img}
                        className={cls.img}
                    />
                    <p className={cls.date}>{article.createdAt}</p>
                </div>
                <div className={cls.infoWrapper}>
                    <p className={cls.types}>{article.type.join(", ")}</p>
                    <span className={cls.views}>{String(article.views)}</span>
                    <EyeIcon className={cls.icon} />
                </div>
                <h3 className={cls.title}>{article.title}</h3>
            </Card>
        </AppLink>
    );
};
