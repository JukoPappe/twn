import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from "../../store/reducers/app.reducer";
import { Observable } from "rxjs";
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
  paginationIndex = 1;

  constructor(private readonly store: Store<AppState>) {
    this.store.dispatch(loadTableData());
    this.tableData = this.store.select(getTableData);
  }

  sortTable = (event: { column: keyof Article, sortType: TableSorting }): void => {
    this.store.dispatch(sortTable(event));
  }

  paginate = (toPage: number): void => {
    this.paginationIndex = toPage;
  }
}
