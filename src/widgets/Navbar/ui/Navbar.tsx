import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Button, ButtonTheme } from "shared/ui/Button/ui/Button";
import { classNames } from "shared/lib/classNames/classNames";
import { LoginModal } from "features/AuthByUsername";
import { getUserAuthData, userActions } from "entities/User";
import { useAppDispatch } from "app/providers/StoreProvider/config/hooks";
import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogOut = useCallback(() => {
        dispatch(userActions.logout());
        onCloseModal();
    }, [dispatch, onCloseModal]);

    if (authData) {
        return (
            <nav className={classNames(cls.navbar, {}, [className])}>
                <Button
                    onClick={onLogOut}
                    theme={ButtonTheme.CLEAR}
                    className={cls.links}
                >
                    {t("Выйти")}
                </Button>
            </nav>
        );
    }

    return (
        <nav className={classNames(cls.navbar, {}, [className])}>
            <Button
                onClick={onShowModal}
                theme={ButtonTheme.CLEAR}
                className={cls.links}
            >
                {t("Войти")}
            </Button>
            {isAuthModal && (
                <LoginModal onClose={onCloseModal} isOpen={isAuthModal} />
            )}
        </nav>
    );
};
