import { FC, Reducer } from "react";
import { ReducersMapObject, UnknownAction } from "@reduxjs/toolkit";
import { StoreProvider } from "app/providers/StoreProvider";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { LoginSchema, loginReducer } from "features/AuthByUsername";

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer as Reducer<LoginSchema | undefined, UnknownAction>,
  };

export const StoreDecorator =
    (
        initialState: DeepPartial<StateSchema>,
        asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
    ) =>
    (Story: FC) =>
        (
            <StoreProvider
                initialState={initialState as StateSchema}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <Story />
            </StoreProvider>
        );
