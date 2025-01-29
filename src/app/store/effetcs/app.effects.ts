import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  articleDataRetrieved, dataLoaded,
  loadArticle, loadingData,
  loadTableData, restoreOriginalTableData, setTableDataAfterSorting, sortTable, tableDataRetrieved
} from "../actions/app.actions";
import { map, mergeMap, switchMap, withLatestFrom } from "rxjs";
import { Article } from "../../shared/model/article";
import { ArticleService } from "../../components/article/article.service";
import { TableService } from "../../components/table/table.service";
import { TableData, TableSorting } from "../../shared/model/table";
import { Store } from "@ngrx/store";
import { AppState } from "../reducers/app.reducer";
import { getTableData } from "../selectors/app.selectors";

@Injectable()
export class AppEffects {
  actions$ = inject(Actions);
  store$ = inject(Store<AppState>);
  constructor(
    private readonly articleService: ArticleService,
    private readonly tableService: TableService
  ) {}

  readonly loadArticle = createEffect(() =>
    this.actions$.pipe(
      ofType(loadArticle),
      mergeMap(() => {
        this.store$.dispatch(loadingData());
        return this.articleService.getArticle();
      }),
      switchMap((response: Object) => [
        dataLoaded(),
        articleDataRetrieved({ articleData: response as Article})
      ])
    )
  );

  readonly loadAllArticle = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTableData),
      mergeMap(() => {
        this.store$.dispatch(loadingData());
        return this.tableService.getAllArticles();
      }),
      switchMap((response: Object) => [
        dataLoaded(),
        tableDataRetrieved({ tableData: response as TableData })
      ])
    )
  );

  readonly sortTableData = createEffect(() =>
    this.actions$.pipe(
      ofType(sortTable),
      withLatestFrom(this.store$.select(getTableData)),
      map(([action, tableData]) => {
        console.log(action);
        const sortedData = this.tableService.sortTable(tableData, action.column, action.sortType);
        console.log(action.sortType !== TableSorting.DEFAULT);
        console.log(sortedData);
        return action.sortType !== TableSorting.DEFAULT ? setTableDataAfterSorting({ tableData: sortedData  }) : restoreOriginalTableData();
      })
    )
  );
}