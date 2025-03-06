const campoUsername = '#username';
const campoPassword = '#password';

const btnSignIn = '#root > div > main > div.SignInForm-paper > form > button';

const msgUserLogged = '[data-test="user-onboarding-dialog-title"]';

class LoginPage {
    acessarLogin() {
        cy.visit('/');
    }

    preencherCampoUsername(username) {
        cy.preencherCampo(campoUsername, username);
    }

    preencherCampoPassword(password) {
        cy.preencherCampo(campoPassword, password);
    }

    clicarSignIn() {
        cy.clicar(btnSignIn);
    }

    validarLoginEfetuado() {
        cy.get(msgUserLogged).contains("Get Started with Real World App");
    }
}

export default new LoginPage();
