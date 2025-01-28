import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Article, ARTICLE_API } from "../../shared/model/article";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  constructor(private http: HttpClient) {
  }

  getArticle = (): Observable<Object> => {
    return this.http.get(ARTICLE_API);
  }
}