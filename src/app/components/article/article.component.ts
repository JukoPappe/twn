import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from "../../store/reducers/app.reducer";
import { loadArticle } from "../../store/actions/app.actions";
import { getArticleData } from "../../store/selectors/app.selectors";
import { Observable } from "rxjs";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
  standalone: false
})
export class ArticleComponent {
  articleData: Observable<string | undefined>;

  constructor(private readonly store: Store<AppState>) {
    console.log(" article");
    this.store.dispatch(loadArticle());
    console.log(this.store.select(getArticleData));
    this.articleData = this.store.select(getArticleData);
  }

}
