import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from "../../store/reducers/app.reducer";
import { Observable } from "rxjs";
import { loadTableData } from "../../store/actions/app.actions";
import { getTableData } from "../../store/selectors/app.selectors";
import { TableData } from "../../shared/model/table";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  standalone: false
})
export class TableComponent {
  tableData: Observable<TableData | undefined>;
  constructor(private readonly store: Store<AppState>) {
    this.store.dispatch(loadTableData());
    this.tableData = this.store.select(getTableData);
  }
}
