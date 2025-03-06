Cypress.Commands.add("preencherCampo", (seletor, texto) => {
    cy.get(seletor).type(texto);
});

Cypress.Commands.add("clicar", (seletor) =>
    cy.get(seletor).click()
);

Cypress.Commands.add("selecionar", (seletor, valor) => {
    cy.get(seletor).select(valor);
  });

Cypress.Commands.add("validarTexto", (seletor, texto) =>
    cy.get(seletor).contains(texto)
);