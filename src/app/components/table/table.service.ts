import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ALL_ARTICLES_API } from "../../shared/model/table";

@Injectable({
  providedIn: "root"
})
export class TableService {
  constructor(private http: HttpClient) {}

  getAllArticles = (): Observable<Object> => {
    return this.http.get(ALL_ARTICLES_API);
  }
}