import { Article } from "./article";

export const ALL_ARTICLES_API = "https://twn-project-1729c-default-rtdb.europe-west1.firebasedatabase.app/articles.json";

export const MAX_PAGINATOR_ELEMENTS = 5;

export const TABLE_HEADER: { name: string, articleReference: keyof Article }[] = [
  {
    name: "Eesnimi",
    articleReference: "firstname"
  },
  {
    name: "Perekonnanimi",
    articleReference: "surname"
  },
  {
    name: "Sugu",
    articleReference: "sex"
  },
  {
    name: "Sünnikuupäev",
    articleReference: "date"
  }
];

export enum TableSorting {
  ASC = 'Asc',
  DESC = 'Desc',
  DEFAULT = ''
}

export interface TableData {
  list: Article[]
}