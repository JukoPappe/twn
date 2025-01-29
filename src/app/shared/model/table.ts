import { Article } from "./article";

export const ALL_ARTICLES_API = "https://proovitoo.twn.ee/api/list";

export const MAX_PAGINATOR_ELEMENTS = 5;

export interface TableData {
  list: Article[]
}