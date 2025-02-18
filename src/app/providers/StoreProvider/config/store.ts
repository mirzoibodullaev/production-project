import {
    ReducersMapObject,
    ThunkDispatch,
    UnknownAction,
    configureStore,
} from "@reduxjs/toolkit";
import { ReduxStoreWithManager, StateSchema } from "./StateSchema";
import { userReducer } from "entities/User";
import { createReducerManager } from "./reducerManager";

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>
): ReduxStoreWithManager {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        reducer: reducerManager.reduce as ReducersMapObject<StateSchema>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    (store as ReduxStoreWithManager).reducerManager = reducerManager;

    return store as ReduxStoreWithManager;
}

export type AppStore = ReturnType<typeof createReduxStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction> &
    AppStore["dispatch"];
