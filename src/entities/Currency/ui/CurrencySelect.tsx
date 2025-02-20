import { classNames } from "shared/lib/classNames/classNames";
import { Select } from "shared/ui/Select/ui/Select";
import { Currency } from "../model/types/currency";
import cls from "./CurrencySelect.module.scss";
import { useCallback } from "react";

interface CurrencySelectProps {
    className?: string;
    value?: string;
    readonly?: boolean,
    onChange?: (vale: Currency) => void;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.UZS, content: Currency.UZS },
];

export const CurrencySelect = ({
    className,
    value,
    readonly,
    onChange,
}: CurrencySelectProps) => {
    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
        readonly={readonly}
            className={classNames(cls.CurrencySelect, {}, [className])}
            options={options}
            value={value}
            onChange={onChangeHandler}
        ></Select>
    );
};
