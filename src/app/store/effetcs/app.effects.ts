import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { articleDataRetrieved, loadArticle } from "../actions/app.actions";
import { map, mergeMap, of } from "rxjs";
import { Article } from "../../shared/model/article";
import { ArticleService } from "../../components/article/article.service";

@Injectable()
export class AppEffects {
  actions$ = inject(Actions);
  constructor(private readonly articleService: ArticleService) {
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
}