import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleDetailsPage.module.scss";
import { ArticleDetails } from "entities/Article";
import { useParams } from "react-router-dom";

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <div
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                <p>Статья не найдена</p>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
};

export default ArticleDetailsPage;
