import { classNames } from "shared/lib/classNames/classNames";
import { ArticleCodeBlock } from "entities/Article/model/types/article";
import cls from "./ArticleCodeBlockComponent.module.scss";
import { Code } from "shared/ui/Code/ui/Code";

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = ({
    className,
    block,
}: ArticleCodeBlockComponentProps) => {
    return (
        <div
            className={classNames(cls.ArticleCodeBlockComponent, {}, [
                className,
            ])}
        >
            <Code text={block.code} />
        </div>
    );
};
