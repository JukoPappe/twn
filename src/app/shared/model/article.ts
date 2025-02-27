export const ARTICLE_API = "https://twn-project-1729c-default-rtdb.europe-west1.firebasedatabase.app/article.json";
export interface Article {
  id: string,
  boolean: boolean,
  phone: string,
  date: number,
  tags: string[],
  sex: string,
  firstname: string,
  surname: string,
  email: string,
  title: string,
  intro: string
  personal_code: number,
  body: string,
  image: string
}