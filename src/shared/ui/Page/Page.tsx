import { ReactNode, RefObject, UIEvent, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { getScrollByPath, scrollActions } from "widgets/ScrollSave";
import cls from "./Page.module.scss";
import { StateSchema } from "app/providers/StoreProvider";
import { useThrottle } from "shared/lib/hooks/useThrottle/useThrottle";

interface PageProps {
    className?: string;
    onScrollEnd?: () => void;
    children: ReactNode;
}

export const Page = ({ className, children, onScrollEnd }: PageProps) => {
    const wrapperRef = useRef<HTMLDivElement>(
        null
    ) as RefObject<HTMLDivElement>;
    const triggerRef = useRef<HTMLDivElement>(
        null
    ) as RefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) =>
        getScrollByPath(state, pathname)
    );

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    useEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    }, [scrollPosition]);

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(
            scrollActions.setScrollPosition({
                position: e.currentTarget.scrollTop,
                path: pathname,
            })
        );
    }, 500);

    return (
        <section
            onScroll={onScroll}
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
        >
            {children}
            {onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
        </section>
    );
};