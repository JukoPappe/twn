import { articleData } from "./data/article";

export class ServiceCalls {
  stubArticleData() {
    cy.intercept("GET", "https://proovitoo.twn.ee/api/list/972d2b8a",
      {
        body: articleData,
        headers: { 'content-type': 'application/json' }
      }
    ).as("LoadArticle");
  }

  waitOnArticleData() {
    cy.wait("@LoadArticle");
  }
}
