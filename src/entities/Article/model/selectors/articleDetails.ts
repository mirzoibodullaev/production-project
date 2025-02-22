import { StateSchema } from "app/providers/StoreProvider";

export const getArticleDetailsData = (state: StateSchema) =>
    state.articles?.data;

export const getArticleDetailsError = (state: StateSchema) =>
    state.articles?.error;

export const getArticleDetailsLoading = (state: StateSchema) =>
    state.articles?.isLoading;