import { ChangeEvent, InputHTMLAttributes, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export const Input = memo(
    ({
        className,
        value,
        onChange,
        type = "text",
        ...otherProps
    }: InputProps) => {
        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            onChange?.(e.target.value);
        };
        return (
            <input
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={classNames(cls.Input, {}, [className])}
                {...otherProps}
            />
        );
    }
);
