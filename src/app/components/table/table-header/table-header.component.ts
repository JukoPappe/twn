import { Component, EventEmitter, Output } from "@angular/core";
import { Article } from "../../../shared/model/article";
import { TABLE_HEADER, TableSorting } from "../../../shared/model/table";

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrl: './table-header.component.scss',
  standalone: false
})
export class TableHeaderComponent {
  SortingType = TableSorting;
  tableHeader = TABLE_HEADER;
  sortedColumn?: keyof Article;
  activeSortType = TableSorting.DEFAULT;

  @Output()
  sortEvent = new EventEmitter<{ column: keyof Article, sortType: TableSorting }>();

  sortTable = (column: keyof Article): void => {
    const sortType = this.sortType(column);
    this.sortEvent.emit({ column, sortType });
    this.sortedColumn = column;
    this.activeSortType = sortType;
  }

  sortType = (column: keyof Article): TableSorting => {
    let type = TableSorting.ASC;
    if (this.sortedColumn === column) {
      switch (this.activeSortType) {
        case TableSorting.ASC:
          type = TableSorting.DESC;
          break;
        case TableSorting.DESC:
          type = TableSorting.DEFAULT;
          break;
      }
    }
    return type;
  }
}
