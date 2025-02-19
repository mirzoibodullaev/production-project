import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData";
import { getProfileIsLoading } from "entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError";
import { Button, ButtonTheme } from "shared/ui/Button/ui/Button";
import { Input } from "shared/ui/Input/ui/Input";
import { useSelector } from "react-redux";
import cls from "./ProfileCard.module.scss";

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation("profile");
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.cardHeader}>
                <h1>{t("Профиль")}</h1>
                <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
                    {t("Редактировать")}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    className={cls.input}
                    value={data?.firstname}
                    placeholder={t("Ваше имя")}
                />
                <Input
                    className={cls.input}
                    value={data?.lastname}
                    placeholder={t("Ваша фамилия")}
                />
            </div>
        </div>
    );
};
