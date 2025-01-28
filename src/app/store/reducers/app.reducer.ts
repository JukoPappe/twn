import { Action, createReducer, on } from "@ngrx/store";
import { articleDataRetrieved, tableDataRetrieved } from "../actions/app.actions";
import { Article } from "../../shared/model/article";
import { TableData } from "../../shared/model/table";

export const APP_FEATURE_KEY = "app";

export interface AppState {
  tableData?: TableData;
  articleData?: Article;
}

const initialState: AppState = {
  articleData: undefined,
  tableData: undefined
}

const appStateReducer = createReducer(
  initialState,
  on(articleDataRetrieved, (state, data) => ({ ...state, articleData: data.articleData })),
  on(tableDataRetrieved, (state, data) => ({ ...state, tableData: data.tableData }))
);

export const reducer = (state: AppState = initialState, action: Action) => appStateReducer(state, action);