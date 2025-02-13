import { AppLink, AppLinkTheme } from "shared/ui/AppLink/ui/AppLink";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <nav className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={"/"}
                    className={cls.mainLink}
                >
                    Главная
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
                    О сайте
                </AppLink>
            </div>
        </nav>
    );
};
