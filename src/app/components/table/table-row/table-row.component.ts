import { Component, Input } from "@angular/core";
import { Article } from "../../../shared/model/article";

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrl: './table-row.component.scss',
  standalone: false
})
export class TableRowComponent {
  @Input()
  article?: Article;
}
