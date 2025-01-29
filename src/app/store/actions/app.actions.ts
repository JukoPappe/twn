import { createAction, props } from "@ngrx/store";
import { Article } from "../../shared/model/article";
import { TableData, TableSorting } from "../../shared/model/table";

export enum AppActionTypes {
  LoadArticle = "Load article",
  ArticleDataRetrieved = "Article data retrieved",
  LoadTableData = "Load all articles for table",
  TableDataRetrieved = "Table data retrieved",
  SortTable = "Sort table by column and sort type",
  SetTableDataAfterSorting = "Set table data after sorting",
  RestoreOriginalTableData = "Restore original table data",
  LoadingData = "Loading data",
  DataLoaded = "Data loaded"
}

export const loadArticle = createAction(AppActionTypes.LoadArticle);
export const articleDataRetrieved = createAction(AppActionTypes.ArticleDataRetrieved, props<{ articleData: Article }>());
export const loadTableData = createAction(AppActionTypes.LoadTableData);
export const tableDataRetrieved = createAction(AppActionTypes.TableDataRetrieved, props<{ tableData: TableData }>());
export const sortTable = createAction(AppActionTypes.SortTable, props<{ column: keyof Article, sortType: TableSorting }>());
export const setTableDataAfterSorting = createAction(AppActionTypes.SetTableDataAfterSorting, props<{ tableData: TableData }>());

export const restoreOriginalTableData = createAction(AppActionTypes.RestoreOriginalTableData);
export const loadingData = createAction(AppActionTypes.LoadingData);
export const dataLoaded = createAction(AppActionTypes.DataLoaded);
