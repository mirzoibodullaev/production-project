import { classNames } from "shared/lib/classNames/classNames";
import { ArticleTextBlock } from "entities/Article/model/types/article";
import cls from "./ArticleTextComponent.module.scss";

interface ArticleTextComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextComponent = ({
    className,
    block,
}: ArticleTextComponentProps) => {
    return (
        <div className={classNames(cls.ArticleTextComponent, {}, [className])}>
            {block.title && <h3 className={cls.title}>{block.title}</h3>}
            {block.paragraphs.map((paragraph) => (
                <p key={paragraph} className={cls.paragraph}>
                    {paragraph}
                </p>
            ))}
        </div>
    );
};
