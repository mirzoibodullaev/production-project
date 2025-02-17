import { classNames } from "shared/lib/classNames/classNames";
import { Modal } from "shared/ui/Modal/ui/Modal";
import cls from "./Navbar.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/ui/Button";
import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <nav className={classNames(cls.navbar, {}, [className])}>
            <Button
                onClick={onToggleModal}
                theme={ButtonTheme.CLEAR}
                className={cls.links}
            >
                {t("Войти")}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                rerum eveniet blanditiis eum sit ducimus earum hic debitis odit
                culpa. Cum accusamus, architecto repellendus inventore alias
                nemo? Aliquid, cupiditate deleniti.
            </Modal>
        </nav>
    );
};
