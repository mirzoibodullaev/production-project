import { classNames } from "shared/lib/classNames/classNames";
import { ArticleView } from "entities/Article/model/types/article";
import { Button, ButtonTheme } from "shared/ui/Button/ui/Button";
import ListIcon from "shared/assets/icons/bi_list.svg";
import GridIcon from "shared/assets/icons/fe_tiled.svg";
import cls from "./ArticleViewSelector.module.scss";

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.GRID,
        icon: GridIcon,
    },
    {
        view: ArticleView.LIST,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = ({
    className,
    view,
    onViewClick,
}: ArticleViewSelectorProps) => {
    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    onClick={onClick(viewType.view)}
                    key={viewType.view}
                    theme={ButtonTheme.CLEAR}
                >
                    <viewType.icon
                        className={classNames(cls.view, {
                            [cls.selected]: viewType.view !== view,
                        })}
                    />
                </Button>
            ))}
        </div>
    );
};
