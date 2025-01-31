import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { delay, Observable } from "rxjs";
import { ALL_ARTICLES_API, TableData, TableSorting } from "../../shared/model/table";
import { Article } from "../../shared/model/article";
import { TEST_SPINNER_WITH_DELAY } from "../../app.config";

@Injectable({
  providedIn: "root"
})
export class TableService {
  constructor(private http: HttpClient) {}

  getAllArticles = (): Observable<object> => {
    return this.http.get(ALL_ARTICLES_API).pipe(delay(TEST_SPINNER_WITH_DELAY));
  }

  sortTable = (tableData: TableData, column: keyof Article, sortType: TableSorting) => {
    let result = tableData;
    switch (sortType) {
      case TableSorting.ASC:
        result = this.sortAscByColumn(tableData, column);
        break
      case TableSorting.DESC:
        result = this.sortDescByColumn(tableData, column);
        break
    }
    return result;
  }

  sortAscByColumn = (tableData: TableData, column: keyof Article): TableData => {
    let sortedList = [ ...tableData.list ];
    sortedList = sortedList.sort((articleA: Article, articleB: Article) => {
      return articleA[column]?.toString().localeCompare(articleB[column]?.toString(), "est");
    });
    return { list: sortedList };
  }
  sortDescByColumn = (tableData: TableData, column: keyof Article): TableData => {
    let sortedList = [ ...tableData.list ];
    sortedList = sortedList.sort((articleA: Article, articleB: Article) => {
      return articleB[column]?.toString().localeCompare(articleA[column]?.toString(), "est");
    });
    return { list: sortedList };
  }
}