import { ReactNode, useEffect } from "react";
import { useStore } from "react-redux";
import { Reducer } from "@reduxjs/toolkit";
import {
    ReduxStoreWithManager,
    StateSchemaKey,
} from "app/providers/StoreProvider/config/StateSchema";
import { useAppDispatch } from "app/providers/StoreProvider/config/hooks";

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer;
};

interface DynamicModuleLoaderProps {
    reducers: ReducerList;
    removeAfterUnmount?: boolean;
    children: ReactNode;
}

export const DynamicModuleLoader = ({
    children,
    reducers,
    removeAfterUnmount,
}: DynamicModuleLoaderProps) => {
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useAppDispatch();

    useEffect(() => {
        Object.entries(reducers as Required<ReducerList>).forEach(
            ([name, reducer]) => {
                store.reducerManager.add(name as StateSchemaKey, reducer);
                dispatch({ type: `@INIT ${name}` });
            }
        );

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers as Required<ReducerList>).forEach(
                    ([name]) => {
                        store.reducerManager.remove(name as StateSchemaKey);
                        dispatch({ type: `@DESTROY ${name}` });
                    }
                );
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <>{children}</>;
};
