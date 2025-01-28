import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  articleDataRetrieved,
  loadArticle,
  loadTableData, tableDataRetrieved
} from "../actions/app.actions";
import { map, mergeMap } from "rxjs";
import { Article } from "../../shared/model/article";
import { ArticleService } from "../../components/article/article.service";
import { TableService } from "../../components/table/table.service";
import { TableData } from "../../shared/model/table";

@Injectable()
export class AppEffects {
  actions$ = inject(Actions);
  constructor(private readonly articleService: ArticleService, private readonly tableService: TableService) {
  }

  readonly loadArticle = createEffect(() =>
    this.actions$.pipe(
      ofType(loadArticle),
      mergeMap(() => {
        return this.articleService.getArticle();
      }),
      map((response: Object) => {
        return articleDataRetrieved({ articleData: response as Article});
      })
    )
  );

  readonly loadAllArticle = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTableData),
      mergeMap(() => {
        return this.tableService.getAllArticles();
      }),
      map((response: Object) => {
        return tableDataRetrieved({ tableData: response as TableData });
      })
    )
  );
}