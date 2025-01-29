import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ALL_ARTICLES_API, TableData, TableSorting } from "../../shared/model/table";
import { Article } from "../../shared/model/article";

@Injectable({
  providedIn: "root"
})
export class TableService {
  constructor(private http: HttpClient) {}

  getAllArticles = (): Observable<Object> => {
    return this.http.get(ALL_ARTICLES_API);
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