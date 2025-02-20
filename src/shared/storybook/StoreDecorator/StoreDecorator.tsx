import { FC, Reducer } from "react";
import { ReducersMapObject, UnknownAction } from "@reduxjs/toolkit";
import { StoreProvider } from "app/providers/StoreProvider";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { LoginSchema, loginReducer } from "features/AuthByUsername";
import { BrowserRouter } from "react-router-dom";
import { ProfileSchema, profileReducer } from "entities/Profile";

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer as Reducer<LoginSchema | undefined, UnknownAction>,
    profile: profileReducer as Reducer<
        ProfileSchema | undefined,
        UnknownAction
    >,
};
export const StoreDecorator =
    (
        initialState?: DeepPartial<StateSchema>,
        asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
    ) =>
    (Story: FC) =>
        (
            <BrowserRouter>
                <StoreProvider
                    initialState={initialState ?? {}}
                    asyncReducers={{
                        ...defaultAsyncReducers,
                        ...asyncReducers,
                    }}
                >
                    <Story />
                </StoreProvider>
            </BrowserRouter>
        );
