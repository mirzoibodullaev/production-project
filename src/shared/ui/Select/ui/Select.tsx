import { classNames } from "shared/lib/classNames/classNames";
import { ChangeEvent, useMemo } from "react";
import cls from "./Select.module.scss";

export interface SelectOptions<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOptions<T>[];
    value?: T;
    readonly?: boolean;
    onChange?: (vale: T) => void;
}

export const Select =<T extends string>({
    className,
    label,
    options,
    value,
    readonly,
    onChange,
}: SelectProps<T>) => {
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
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
