import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from "../../store/reducers/app.reducer";
import { map, Observable } from "rxjs";
import { loadTableData, sortTable } from "../../store/actions/app.actions";
import { getTableData } from "../../store/selectors/app.selectors";
import { TableData, TableSorting } from "../../shared/model/table";
import { Article } from "../../shared/model/article";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  standalone: false
})
export class TableComponent {
  tableData: Observable<TableData>;
  articleList: Observable<Article[]>;
  paginationIndex = 1;
  openArticle?: number;

  constructor(private readonly store: Store<AppState>) {
    this.store.dispatch(loadTableData());
    this.tableData = this.store.select(getTableData);
    this.articleList = this.tableData.pipe(map(tableData => tableData.list));
  }

  sortTable = (event: { column: keyof Article, sortType: TableSorting }): void => {
    this.store.dispatch(sortTable(event));
    this.closeAllArticles();
  }

  paginate = (toPage: number): void => {
    if (this.paginationIndex !== toPage) {
      this.paginationIndex = toPage;
      this.closeAllArticles();
    }

  }

  articleOpened = (index: number): void => {
    if (this.openArticle !== index) {
      this.openArticle = index;
    } else {
      this.closeAllArticles();
    }
  }

  closeAllArticles = (): void => {
    this.openArticle = undefined;
  }
}
