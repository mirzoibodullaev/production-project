import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            Articles Page
        </div>
    );
};

export default ArticlesPage