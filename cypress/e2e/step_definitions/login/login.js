import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../../support/pages/LoginPage';

Given("I'm on the login page", () => {
    LoginPage.acessarLogin();
});

When("I set a registered my email and password", () => {
    cy.readFile("cypress/fixtures/loginData.json").then((data) => {
        LoginPage.preencherCampoUsername(data.username);
        LoginPage.preencherCampoPassword(data.password);
    });
});

Then("I have a successful login", () => {
    LoginPage.clicarSignIn();
    LoginPage.validarLoginEfetuado();
});