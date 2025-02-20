import { ButtonHTMLAttributes } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

export enum ButtonTheme {
    CLEAR = "clear",
    OUTLINE = "outline",
    OUTLINE_RED = "outline_red",
    BACKGROUND = "background",
    BACKGROUND_INVERTED = "backgroundInverted",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.CLEAR,
        square,
        disabled,
        ...otherProps
    } = props;

    const mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
    };

    return (
        <button
            disabled={disabled}
            className={classNames(cls.Button, mods, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
