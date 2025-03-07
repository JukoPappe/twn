import { articleData } from "./data/article";

export class ServiceCalls {
  stubArticleData() {
    cy.intercept("GET", "https://twn-project-1729c-default-rtdb.europe-west1.firebasedatabase.app/article.json",
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
