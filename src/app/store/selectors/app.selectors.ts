import { createFeatureSelector, createSelector } from "@ngrx/store";
import { APP_FEATURE_KEY, AppState } from "../reducers/app.reducer";

const getAppState = createFeatureSelector<AppState>(APP_FEATURE_KEY);

export const getArticleData = createSelector(getAppState, (state: AppState) => state.articleData);
export const getTableData = createSelector(getAppState, (state: AppState) => state.tableData);