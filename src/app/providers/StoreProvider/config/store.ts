import { NavigateOptions, To } from "react-router-dom";
import {
    Reducer,
    ReducersMapObject,
    ThunkDispatch,
    UnknownAction,
    configureStore,
} from "@reduxjs/toolkit";
import {
    ReduxStoreWithManager,
    StateSchema,
    ThunkExtraArg,
} from "./StateSchema";
import { userReducer } from "entities/User";
import { createReducerManager } from "./reducerManager";
import { $api } from "shared/api/api";

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
): ReduxStoreWithManager {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<StateSchema>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddlware) =>
            getDefaultMiddlware({
                thunk: {
                    extraArgument: extraArg,
                },
            }),
    });

    (store as ReduxStoreWithManager).reducerManager = reducerManager;

    return store as ReduxStoreWithManager;
}

export type AppDispatch = ThunkDispatch<
    StateSchema,
    ThunkExtraArg,
    UnknownAction
>;
