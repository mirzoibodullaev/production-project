import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/ui/Button";
import {
    useAppDispatch,
    useAppSelector,
} from "app/providers/StoreProvider/config/hooks";
import {
    loginActions,
    loginReducer,
} from "features/AuthByUsername/model/slice/loginSlice";
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import { Input } from "shared/ui/Input/ui/Input";
import { getLoginUsername } from "features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword";
import { getLoginError } from "features/AuthByUsername/model/selectors/getLoginError/getLoginError";
import { getLoginLoading } from "features/AuthByUsername/model/selectors/getLoginLoading/getLoginLoading";
import {
    DynamicModuleLoader,
    ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
    className?: string;
    onSucces: () => void;
}

const InitialReducer: ReducerList = {
    loginForm: loginReducer,
};
const LoginForm = memo(({ className, onSucces }: LoginFormProps) => {
    const { t } = useTranslation();
    const username = useAppSelector(getLoginUsername);
    const password = useAppSelector(getLoginPassword);
    const error = useAppSelector(getLoginError);
    const isLoading = useAppSelector(getLoginLoading);
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

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === "fulfilled") {
            onSucces();
        }
    }, [onSucces, dispatch, username, password]);

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={InitialReducer}>
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
        </DynamicModuleLoader>
    );
});

export default LoginForm;
