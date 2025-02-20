import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/ui/Button";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
    getProfileReadonly,
    profileActions,
    updateProfileData,
} from "entities/Profile";
import { useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import cls from "./ProfilePageHeader.module.scss";

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation("profile");
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSaveEdit = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <div className={cls.cardHeader}>
                <h1>{t("Профиль")}</h1>
                {readonly ? (
                    <Button
                        onClick={onEdit}
                        className={cls.editBtn}
                        theme={ButtonTheme.OUTLINE}
                    >
                        {t("Редактировать")}
                    </Button>
                ) : (
                    <div>
                        <Button
                            className={cls.cancelBtn}
                            onClick={onCancelEdit}
                            theme={ButtonTheme.OUTLINE_RED}
                        >
                            {t("Отменить")}
                        </Button>
                        <Button
                            onClick={onSaveEdit}
                            className={cls.saveBtn}
                            theme={ButtonTheme.OUTLINE}
                        >
                            {t("Сохранить")}
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};
