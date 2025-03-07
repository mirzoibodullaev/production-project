import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Button, ButtonTheme } from "shared/ui/Button/ui/Button";
import { classNames } from "shared/lib/classNames/classNames";
import { LoginModal } from "features/AuthByUsername";
import { getUserAuthData, userActions } from "entities/User";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Avatar } from "shared/ui/Avatar/ui/Avatar";
import { AppLink } from "shared/ui/AppLink/ui/AppLink";
import { RouterPath } from "shared/config/routeConfig/routeConfig";
import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const authData = useSelector(getUserAuthData);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogOut = useCallback(() => {
        setIsMenuOpen(false);
        dispatch(userActions.logout());
    }, [dispatch]);

    const toggleMenu = useCallback(() => {
        setIsMenuOpen((prev) => !prev);
    }, []);

    if (authData) {
        return (
            <nav className={classNames(cls.navbar, {}, [className])}>
                <div className={cls.menuWrapper}>
                    <Button onClick={toggleMenu} className={cls.menuTrigger}>
                        <Avatar
                            src={authData.avatar}
                            size={44}
                            alt="profile"
                            className={cls.avatar}
                        />
                    </Button>
                    {isMenuOpen && (
                        <div
                            ref={menuRef}
                            className={classNames(cls.menu, {
                                [cls.menuOpen]: isMenuOpen,
                            })}
                        >
                            <AppLink
                                to={`${RouterPath.profile}${authData.id}`}
                                className={cls.menuItem}
                            >
                                {t("Профиль")}
                            </AppLink>
                            <Button
                                className={classNames(cls.menuItem, {}, [
                                    cls.logout,
                                ])}
                                onClick={onLogOut}
                            >
                                {t("Выйти")}
                            </Button>
                        </div>
                    )}
                </div>
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
