import { useCallback, useRef } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export function useDebounce<T extends (...args: any[]) => void>(callback: T, delay: number) {
    const timer = useRef<NodeJS.Timeout | null>(null);

    return useCallback(
        (...args: Parameters<T>) => {
            if (timer.current) {
                clearTimeout(timer.current);
            }

            timer.current = setTimeout(() => {
                callback(...args);
            }, delay);
        },
        [callback, delay]
    );
}