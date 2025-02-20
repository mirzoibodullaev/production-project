import { classNames } from "shared/lib/classNames/classNames";
import { Country } from "../model/types/country";
import { Select } from "shared/ui/Select/ui/Select";
import { useCallback } from "react";
import cls from "./CountrySelect.module.scss";

interface CountrySelectProps {
    className?: string;
    value?: string;
    readonly?: boolean;
    onChange?: (vale: Country) => void;
}

const options = [
    { value: Country.Uzbekistan, content: Country.Uzbekistan },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.America, content: Country.America },
];

export const CountrySelect = ({
    className,
    value,
    readonly,
    onChange,
}: CountrySelectProps) => {
    const onChangeHandler = useCallback((value:string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            options={options}
            readonly={readonly}
            value={value}
            onChange={onChangeHandler}
            className={classNames(cls.CountrySelect, {}, [className])}
        />
    );
};
