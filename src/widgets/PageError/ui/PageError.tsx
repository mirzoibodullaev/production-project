import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/ui/Button";
import cls from "./PageError.module.scss";

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p className={cls.errorText}>
                {t("Произошла непредвиденная ошибка")}
            </p>
            <Button className={cls.reloadButton} onClick={reloadPage}>
                {t("Обновить страницу")}
            </Button>
        </div>
    );
};
