import { classNames } from "shared/lib/classNames/classNames";
import { Article, ArticleView } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import cls from "./ArticleList.module.scss";

interface ArticleListProps {
    articles: Article[];
    className?: string;
    isLoading?: boolean;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.LIST ? 3 : 12)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton
                className={cls.card}
                key={index}
                view={view}
            />
        ));
};

export const ArticleList = ({
    className,
    articles,
    isLoading,
    view = ArticleView.GRID,
}: ArticleListProps) => {
    const renderArticles = (article: Article) => {
        return (
            <ArticleListItem key={article.id} article={article} view={view} />
        );
    };

    return (
        <div
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
            {articles.length ? articles.map(renderArticles) : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
};