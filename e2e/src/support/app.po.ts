export const getElement = (name: string) => cy.get(`[test-id=${name}]`);

export const expectElementToContain = (element: string, value: string) => getElement(element).contains(value, { matchCase: false });

export const clickButton = (element: string) => getElement(element).click();
