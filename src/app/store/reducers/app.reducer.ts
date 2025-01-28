import { Action, ActionReducerMap, createReducer, on } from "@ngrx/store";
import { articleDataRetrieved, loadArticle } from "../actions/app.actions";
import { Article } from "../../shared/model/article";

export const APP_FEATURE_KEY = "app";

export interface AppState {
  tableData: any;
  articleData?: Article;
}

const initialState: AppState = {
  articleData: undefined,
  tableData: undefined
}

const appStateReducer = createReducer(
  initialState,
  on(loadArticle, (state) => {
    console.log("load article");
    return state;
  }),
  on(articleDataRetrieved, (state, data) => ({ ...state, articleData: data.articleData }))
);

export const reducer = (state: AppState = initialState, action: Action) => appStateReducer(state, action);