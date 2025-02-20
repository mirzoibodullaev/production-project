import { classNames } from "shared/lib/classNames/classNames";
import { ChangeEvent, useMemo } from "react";
import cls from "./Select.module.scss";

export interface SelectOptions {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOptions[];
    value?: string;
    readonly?: boolean;
    onChange?: (vale: string) => void;
}

export const Select = ({
    className,
    label,
    options,
    value,
    readonly,
    onChange,
}: SelectProps) => {
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const optionList = useMemo(() => {
        return options?.map((item) => (
            <option key={item.value} value={item.value} className={cls.option}>
                {item.content}
            </option>
        ));
    }, [options]);

    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select
                disabled={readonly}
                value={value}
                onChange={onChangeHandler}
                className={cls.select}
            >
                {optionList}
            </select>
        </div>
    );
};
