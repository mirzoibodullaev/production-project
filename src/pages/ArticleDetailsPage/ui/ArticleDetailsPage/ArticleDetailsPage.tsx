import { useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleDetails } from "entities/Article";
import { CommentList } from "entities/Comment";
import {
    DynamicModuleLoader,
    ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
    articleDetailsCommentsReducer,
    getArticleComments,
} from "../../model/slice/articleDetailsCommentsSlice";
import { getArticleCommentsIsLoading } from "../../model/selectors/commentsSelectors";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchCommentsByArticleId } from "../../model/services/fetchArticle/fetchCommentsByArticleId";
import { AddCommentForm } from "features/AddCommentForm";
import { addCommentForArticle } from "pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle";
import { RouterPath } from "shared/config/routeConfig/routeConfig";
import { Button, ButtonTheme } from "shared/ui/Button/ui/Button";
import cls from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducerList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation("article-details");
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onBackToList = useCallback(() => {
        navigate(RouterPath.articles);
    }, [navigate]);

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch]
    );

    useEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    }, [dispatch, id]);

    if (!id) {
        return (
            <div
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                <p>{t("Статья не найдена")}</p>
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                <Button onClick={onBackToList} theme={ButtonTheme.OUTLINE}>
                    {t("Назад к списку")}
                </Button>
                <ArticleDetails id={id} />
                <h2 className={cls.commentTitle}>{t("Комментарии")}</h2>
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList comments={comments} isLoading={isLoading} />
            </div>
        </DynamicModuleLoader>
    );
};

export default ArticleDetailsPage;
