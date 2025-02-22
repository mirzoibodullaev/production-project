import { classNames } from "shared/lib/classNames/classNames";
import { ArticleImageBlock } from "entities/Article/model/types/article";
import cls from "./ArticleImageBlockComponent.module.scss";

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = ({
    className,
    block,
}: ArticleImageBlockComponentProps) => {
    return (
        <div
            className={classNames(cls.ArticleImageBlockComponent, {}, [
                className,
            ])}
        >
            <img src={block.src} alt={block.title} className={cls.img} />
            {block.title && <h3 className={cls.title}>{block.title}</h3>}
        </div>
    );
};
