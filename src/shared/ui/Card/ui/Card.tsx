import { classNames } from "shared/lib/classNames/classNames";
import { HTMLAttributes, ReactNode } from "react";
import cls from "./Card.module.scss";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
}

export const Card = ({ className, children, ...otherProps }: CardProps) => {
    return (
        <div {...otherProps} className={classNames(cls.Card, {}, [className])}>
            {children}
        </div>
    );
};
