import { clickButton, expectElementToContain } from "../support/app.po";
import { ServiceCalls} from "../support/service-calls";

const serviceCall = new ServiceCalls();

describe('e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should display header and name on welcome screen', () => {
    expectElementToContain('header', 'PROOVITÖÖ!');
    expectElementToContain('name', 'JUKO PAPPE');
  });

  it('should navigate to article and have intro and body', () => {
    serviceCall.stubArticleData();
    clickButton("article");
    serviceCall.waitOnArticleData();
    cy.get("p").contains('INTRO');
    cy.get("p").contains('BODY');
  });
});
