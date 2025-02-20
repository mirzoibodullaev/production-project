import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/ui/Input";
import { Profile } from "../../model/types/profile";
import { Loader } from "shared/ui/Loader/ui/Loader";
import { Avatar } from "shared/ui/Avatar/ui/Avatar";
import { Currency, CurrencySelect } from "entities/Currency";
import { Country, CountrySelect } from "entities/Country";
import cls from "./ProfileCard.module.scss";

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeFirstname?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = ({
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeCity,
    onChangeAge,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
}: ProfileCardProps) => {
    const { t } = useTranslation("profile");

    if (isLoading) {
        return (
            <div
                className={classNames(
                    cls.ProfileCard,
                    { [cls.loading]: true },
                    [className]
                )}
            >
                <Loader />
            </div>
        );
    }
    if (error) {
        return (
            <div
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.error,
                ])}
            >
                <p className={cls.errorTitle}>
                    {t("Произошла ошибка при загрузке профиля")}
                </p>
                <p className={cls.errorText}>
                    {t("Попробуйте обновить страницу")}
                </p>
            </div>
        );
    }

    const mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data.avatar} />
                    </div>
                )}
                <div className={cls.inputWrapper}>
                    <label className={cls.label}>{t("Ваше имя :")}</label>
                    <Input
                        onChange={onChangeFirstname}
                        readonly={readonly}
                        className={cls.input}
                        value={data?.firstname}
                    />
                </div>
                <div className={cls.inputWrapper}>
                    <label className={cls.label}>{t("Ваша фамилия :")}</label>
                    <Input
                        onChange={onChangeLastname}
                        readonly={readonly}
                        className={cls.input}
                        value={data?.lastname}
                    />
                </div>
                <div className={cls.inputWrapper}>
                    <label className={cls.label}>{t("Ваш возраст :")}</label>
                    <Input
                        onChange={onChangeAge}
                        readonly={readonly}
                        className={cls.input}
                        value={data?.age}
                    />
                </div>
                <div className={cls.inputWrapper}>
                    <label className={cls.label}>{t("Город :")}</label>
                    <Input
                        onChange={onChangeCity}
                        readonly={readonly}
                        className={cls.input}
                        value={data?.city}
                    />
                </div>
                <div className={cls.inputWrapper}>
                    <label className={cls.label}>
                        {t("Имя пользователья :")}
                    </label>
                    <Input
                        onChange={onChangeUsername}
                        readonly={readonly}
                        className={cls.input}
                        value={data?.username}
                    />
                </div>
                <div className={cls.inputWrapper}>
                    <label className={cls.label}>{t("Аватар :")}</label>
                    <Input
                        onChange={onChangeAvatar}
                        readonly={readonly}
                        className={cls.input}
                        value={data?.avatar}
                    />
                </div>
                <div className={cls.inputWrapper}>
                <label className={cls.label}>{t("Укажите валюту :")}</label>
                    <CurrencySelect
                        className={cls.input}
                        readonly={readonly}
                        onChange={onChangeCurrency}
                        value={data?.currency}
                    />
                </div>
                <div className={cls.inputWrapper}>
                <label className={cls.label}>{t("Укажите страну :")}</label>
                    <CountrySelect
                        className={cls.input}
                        readonly={readonly}
                        onChange={onChangeCountry}
                        value={data?.country}
                    />
                </div>
            </div>
        </div>
    );
};
