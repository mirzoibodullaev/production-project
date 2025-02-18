import { FC } from "react";
import { StoreProvider } from "app/providers/StoreProvider";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const StoreDecorator = (initialState: Partial<StateSchema>) => (Story: FC) => (
    <StoreProvider initialState={initialState as StateSchema}>
        <Story />
    </StoreProvider>
);
