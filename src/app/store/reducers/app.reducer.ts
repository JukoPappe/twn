import { Action, createReducer, on } from "@ngrx/store";
import {
  articleDataRetrieved, dataLoaded, loadingData,
  restoreOriginalTableData,
  setTableDataAfterSorting,
  tableDataRetrieved
} from "../actions/app.actions";
import { Article } from "../../shared/model/article";
import { TableData } from "../../shared/model/table";

export const APP_FEATURE_KEY = "app";

export interface AppState {
  originalTableData: TableData;
  tableData: TableData;
  isLoading: boolean;
  articleData?: Article;
}

const initialState: AppState = {
  articleData: undefined,
  originalTableData: {
    list: []
  },
  tableData: {
    list: []
  },
  isLoading: false
}

const appStateReducer = createReducer(
  initialState,
  on(articleDataRetrieved, (state, data) => ({ ...state, articleData: data.articleData })),
  on(tableDataRetrieved, (state, data) => ({ ...state, tableData: data.tableData, originalTableData: data.tableData })),
  on(setTableDataAfterSorting, (state, data) => ({ ...state, tableData: data.tableData })),
  on(restoreOriginalTableData, (state) => ({ ...state, tableData: state.originalTableData })),
  on(loadingData, (state) => ({ ...state, isLoading: true })),
  on(dataLoaded, (state) => ({ ...state, isLoading: false })),
);

export const reducer = (state: AppState = initialState, action: Action) => appStateReducer(state, action);