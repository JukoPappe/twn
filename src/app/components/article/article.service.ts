import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ARTICLE_API } from "../../shared/model/article";
import { delay, Observable } from "rxjs";
import { TEST_SPINNER_WITH_DELAY } from "../../app.config";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticle = (): Observable<Object> => {
    return this.http.get(ARTICLE_API).pipe(delay(TEST_SPINNER_WITH_DELAY));
  }
}