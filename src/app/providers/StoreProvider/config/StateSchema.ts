import {
    EnhancedStore,
    Reducer,
    ReducersMapObject,
    UnknownAction,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { NavigateOptions, To } from "react-router-dom";
import { ProfileSchema } from "entities/Profile";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUsername";
import { AppDispatch } from "./store";
import { ArticleDetailsSchema } from "entities/Article";
import { ArticleDetailsCommentsSchema } from "pages/ArticleDetailsPage";
import { AddCommentFormSchema } from "features/AddCommentForm";
import { ArticlesPageSchema } from "pages/ArticlesPage";
import { ScrollSchema } from "widgets/ScrollSave";

export interface StateSchema {
    user: UserSchema;
    scroll: ScrollSchema
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articles?: ArticleDetailsSchema;
    articleDetailsComments?: ArticleDetailsCommentsSchema;
    addCommentForm?: AddCommentFormSchema;
    articlesPage?: ArticlesPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: UnknownAction) => StateSchema;
    add: (key: keyof StateSchema, reducer: Reducer) => void;
    remove: (key: keyof StateSchema) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    dispatch: AppDispatch;
    state: StateSchema;
}
