import { createAction, props } from "@ngrx/store";

export enum AppActionTypes {
  LoadArticle = "Load article",
  ArticleDataRetrieved = "Article data retrieved"
}

export const loadArticle = createAction(AppActionTypes.LoadArticle);
export const articleDataRetrieved = createAction(AppActionTypes.ArticleDataRetrieved, props<{ articleData: string }>());
