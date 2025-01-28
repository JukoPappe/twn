import { Article } from "./article";

export const ALL_ARTICLES_API = "https://proovitoo.twn.ee/api/list";

export interface TableData {
  list: Article[]
}