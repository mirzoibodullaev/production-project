import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/ui/Button";
import { useAppDispatch } from "app/providers/StoreProvider/config/hooks";
import { loginActions } from "features/AuthByUsername/model/slice/loginSlice";
import { getLoginState } from "features/AuthByUsername/model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import { Input } from "shared/ui/Input/ui/Input";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const { username, password, error, isLoading } = useSelector(getLoginState);
    const dispatch = useAppDispatch();

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch]
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch]
    );

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <p className={cls.authTitle}>{t("Форма авторизации")}</p>
            {error && (
                <div className={cls.loginError}>
                    {t("Вы ввели неверный логин или пароль")}
                </div>
            )}
            <Input
                value={username}
                placeholder={t("Введите username")}
                onChange={onChangeUsername}
                type="text"
                className={cls.input}
            />
            <Input
                value={password}
                placeholder={t("Введите пароль")}
                onChange={onChangePassword}
                type="text"
                className={cls.input}
            />
            <Button
                disabled={isLoading}
                onClick={onLoginClick}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                className={cls.loginBtn}
            >
                {t("Войти")}
            </Button>
        </div>
    );
});
