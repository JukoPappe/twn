export const ARTICLE_API = "https://proovitoo.twn.ee/api/list/972d2b8a";
export interface Image {
  large: string,
  medium: string,
  small: string,
  alt: string,
  title: string,
}
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
  image: Image,
  images: Image[]
}