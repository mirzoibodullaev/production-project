import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import {
    DynamicModuleLoader,
    ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsLoading,
} from "entities/Article/model/selectors/articleDetails";
import { Skeleton } from "shared/ui/Skeleton/ui/Skeleton";
import { Avatar } from "shared/ui/Avatar/ui/Avatar";
import EyeIcon from "shared/assets/icons/eyeIcon.svg";
import CalendarIcon from "shared/assets/icons/calendarIcon.svg";
import {
    ArticleBlock,
    ArticleBlockType,
} from "entities/Article/model/types/article";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import cls from "./ArticleDetails.module.scss";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextComponent } from "../ArticleTextComponent/ArticleTextComponent";

const reducer: ReducerList = {
    articles: articleDetailsReducer,
};

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

export const ArticleDetails = ({ className, id }: ArticleDetailsProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation("article-details");
    const isLoading = useSelector(getArticleDetailsLoading);
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return (
                    <ArticleCodeBlockComponent
                        className={cls.block}
                        block={block}
                    />
                );
            case ArticleBlockType.IMAGE:
                return (
                    <ArticleImageBlockComponent
                        className={cls.block}
                        block={block}
                    />
                );
            case ArticleBlockType.TEXT:
                return (
                    <ArticleTextComponent className={cls.block} block={block} />
                );
            default:
                return null;
        }
    }, []);

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <div>
                <Skeleton
                    className={cls.avatar}
                    width={200}
                    height={200}
                    border="50%"
                />
                <Skeleton
                    className={cls.title}
                    width={300}
                    height={32}
                    border="6px"
                />
                <Skeleton
                    className={cls.skeleton}
                    width={600}
                    height={24}
                    border="6px"
                />
                <Skeleton
                    className={cls.skeleton}
                    width="100%"
                    height={200}
                    border="6px"
                />
                <Skeleton
                    className={cls.skeleton}
                    width="100%"
                    height={200}
                    border="6px"
                />
            </div>
        );
    } else if (error) {
        content = (
            <p className={cls.articleError}>
                {t("Произошла ошибка при загрузке статьи")}
            </p>
        );
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar
                        src={article?.img}
                        size={200}
                        className={cls.avatar}
                    />
                </div>
                <h1 className={cls.articleTitle}>{article?.title}</h1>
                <h2 className={cls.articleSubtitle}>{article?.subtitle}</h2>
                <div className={cls.articleInfo}>
                    <EyeIcon className={cls.icon} />
                    <span className={cls.articleViews}>{article?.views}</span>
                </div>
                <div className={cls.articleInfo}>
                    <CalendarIcon className={cls.icon} />
                    <span className={cls.articleCreate}>
                        {article?.createdAt}
                    </span>
                </div>
                {article?.blocks.map((block) => (
                    <div key={block.id}>{renderBlock(block)}</div>
                ))}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducer}>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
};
