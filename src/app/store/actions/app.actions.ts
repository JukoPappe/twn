import { createAction, props } from "@ngrx/store";
import { Article } from "../../shared/model/article";
import { TableData } from "../../shared/model/table";

export enum AppActionTypes {
  LoadArticle = "Load article",
  ArticleDataRetrieved = "Article data retrieved",
  LoadTableData = "Load all articles for table",
  TableDataRetrieved = "Table data retrieved",
}

export const loadArticle = createAction(AppActionTypes.LoadArticle);
export const articleDataRetrieved = createAction(AppActionTypes.ArticleDataRetrieved, props<{ articleData: Article }>());
export const loadTableData = createAction(AppActionTypes.LoadTableData);
export const tableDataRetrieved = createAction(AppActionTypes.TableDataRetrieved, props<{ tableData: TableData }>());