import {
    createEntityAdapter,
    createSlice,
} from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { ArticleDetailsRecommendationsSchema } from "../types/articleDetailsRecommendationsSchema";
import { Article } from "entities/Article";
import { fetchArticleRecommendations } from "../services/fetchArticleRecommendations/fetchArticleRecommendations";

const recommendationsAdapter = createEntityAdapter({
    selectId: (article: Article) => article.id,
});

export const getArticleRecommendations =
    recommendationsAdapter.getSelectors<StateSchema>(
        (state) =>
            state.articleDetailsPage?.recommendations ||
            recommendationsAdapter.getInitialState()
    );

const articleDetailsRecommendationsSlice = createSlice({
    name: "articleDetailsRecommendations",
    initialState:
        recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>(
            {
                isLoading: false,
                error: undefined,
                ids: [],
                entities: {},
            }
        ),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchArticleRecommendations.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(
            fetchArticleRecommendations.fulfilled,
            (state, action) => {
                state.isLoading = false;
                recommendationsAdapter.setAll(state, action.payload);
            }
        );
        builder.addCase(
            fetchArticleRecommendations.rejected,
            (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            }
        );
    },
});

export const { reducer: articleDetailsRecommendationsReducer } =
    articleDetailsRecommendationsSlice;