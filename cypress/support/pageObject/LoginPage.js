import testData from '../../fixtures/example.json'
import ForgetPasswordPage from './ForgetPasswordPage';
class LoginPage{
    loginValidUser(){
        cy.get("input[name='username']").type(testData.validUsername);
        cy.get("input[name='password']").type(testData.validPassword);
        cy.get('button').contains('Login').click();
        cy.url().should('contain', 'dashboard/index');
        cy.get('.oxd-userdropdown-name').should('be.visible');
    };

    loginInvalidUser(){
        cy.get("input[name='username']").type(testData.invalidUsername);
        cy.get("input[name='password']").type(testData.invalidPassword);
        cy.get('button').contains('Login').click();
        cy.get('.oxd-alert-content-text').should('have.text', 'Invalid credentials');
    };

    loginWithoutCredentials(){
        cy.get("input[name='username']").should('be.empty');
        cy.get("input[name='password']").should('be.empty');
        cy.get('button').contains('Login').click();
        cy.get('.orangehrm-login-form').should('contain', 'Required');
    };

    clickForgetPassword(){
        cy.get(".orangehrm-login-forgot-header").click();
        cy.url().should('contain', 'requestPasswordResetCode');
        return new ForgetPasswordPage;
    };
}
export default LoginPage;