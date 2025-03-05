import { combineReducers } from "@reduxjs/toolkit";
import { articleDetailsRecommendationsReducer } from "./articleDetailsRecommendationsSlice";
import { articleDetailsCommentsReducer } from "./articleDetailsCommentsSlice";

export const articleDetailsPageReducers = combineReducers({
    recommendations: articleDetailsRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
});
