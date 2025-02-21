import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getInitedUser = (state: StateSchema) => state?.user?._inited;
