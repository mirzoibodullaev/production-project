import { RefObject, useEffect } from "react";

export interface UseInfiniteScrollOptions {
    callback?: () => void;
    triggerRef: RefObject<HTMLElement>;
    wrapperRef: RefObject<HTMLElement>;
}

export function useInfiniteScroll({
    callback,
    triggerRef,
    wrapperRef,
}: UseInfiniteScrollOptions) {
    useEffect(() => {
        const wrapperElement = wrapperRef.current;
        const triggerElement = triggerRef.current;
        if (!callback || !triggerElement) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            },
            {
                root: wrapperElement || null,
                rootMargin: "0px",
                threshold: 1.0,
            }
        );

        observer.observe(triggerElement);

        return () => {
            observer.unobserve(triggerElement);
            observer.disconnect();
        };
    }, [callback, triggerRef, wrapperRef]);
}