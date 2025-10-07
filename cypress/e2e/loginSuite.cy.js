import testData from '../fixtures/example.json'
import LoginPage from '../support/pageObject/LoginPage';

const baseUrl = Cypress.env('baseUrl');
const loginPage = new LoginPage;

describe('Login Page Suite', ()=>{
    beforeEach(()=>{
        cy.visit(baseUrl);
    });
    it('Test-Case 1: User login system', ()=>{
        loginPage.loginValidUser();
    });

    it('Test-Case 2: User login system with invalid credentials', ()=>{
        loginPage.loginInvalidUser();
    });

    it('Test-Case 3: User login without credentials', ()=>{
        loginPage.loginWithoutCredentials();
    });

    it('Test-Case 4: User forgot password', ()=>{
        const forgetPasswordPage = loginPage.clickForgetPassword();
        forgetPasswordPage.fillUsername();
    });
});