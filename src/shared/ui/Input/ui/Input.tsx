import { ChangeEvent, InputHTMLAttributes, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    readonly?: boolean;
    onChange?: (value: string) => void;
}

export const Input = memo(
    ({
        className,
        value,
        readonly,
        type = "text",
        onChange,
        ...otherProps
    }: InputProps) => {
        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            onChange?.(e.target.value);
        };

        const mods = {
            [cls.readonly]: readonly,
        };

        return (
            <input
                readOnly={readonly}
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={classNames(cls.Input, mods, [className])}
                {...otherProps}
            />
        );
    }
);
