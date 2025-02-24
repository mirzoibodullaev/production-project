import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getUserAuthData } from "entities/User";
import { getArticleDetailsData } from "entities/Article";
import { fetchCommentsByArticleId } from "../fetchArticle/fetchCommentsByArticleId";

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    "articleDetails/addCommentForArticle",
    async (text, thunkAPI) => {
        const { extra, rejectWithValue, dispatch, getState } = thunkAPI;

        const userData = getUserAuthData(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) {
            return rejectWithValue("no data");
        }

        try {
            const response = await extra.api.post<Comment>("/comments", {
                articleId: article.id,
                userId: userData.id,
                text,
            });

            if (!response.data) {
                throw new Error();
            }

            dispatch(fetchCommentsByArticleId(article.id))

            return response.data;
        } catch (e) {
            return rejectWithValue("error");
        }
    }
);