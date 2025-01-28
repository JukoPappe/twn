import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from "../../store/reducers/app.reducer";
import { loadArticle } from "../../store/actions/app.actions";
import { getArticleData } from "../../store/selectors/app.selectors";
import { Observable } from "rxjs";
import { Article } from "../../shared/model/article";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
  standalone: false
})
export class ArticleComponent {
  articleData: Observable<Article | undefined>;

  constructor(private readonly store: Store<AppState>) {
    this.store.dispatch(loadArticle());
    this.articleData = this.store.select(getArticleData);
  }

}
