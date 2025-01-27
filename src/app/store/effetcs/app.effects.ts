import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { articleDataRetrieved, loadArticle } from "../actions/app.actions";
import { map, mergeMap, of } from "rxjs";

@Injectable()
export class AppEffects {
  actions$ = inject(Actions);

  readonly loadArticle = createEffect(() =>
    this.actions$.pipe(
      ofType(loadArticle),
      mergeMap(() => {
        return of("result is here");
      }),
      map(response => {
        return articleDataRetrieved({ articleData: response});
      })
    )
  );
}