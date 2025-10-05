import testData from '../fixtures/example.json'
import LoginPage from '../support/pageObject/LoginPage';

const baseUrl = Cypress.env('baseUrl');
const loginPage = new LoginPage;

describe('Login Page Suite', ()=>{
    it('Test-Case 1: User login system', ()=>{
        cy.visit(baseUrl);
        loginPage.loginValidUser();
    });

    it('Test-Case 2: User login system with invalid credentials', ()=>{
        cy.visit(baseUrl);
        loginPage.loginInvalidUser();
    });

    it('Test-Case 3: User login without credentials', ()=>{
        cy.visit(baseUrl);
        loginPage.loginWithoutCredentials();
    });

    it('Test-Case 4: User forgot password', ()=>{
        cy.visit(baseUrl);
        const forgetPasswordPage = loginPage.clickForgetPassword();
        forgetPasswordPage.fillUsername();
    });
});