import testData from '../../fixtures/example.json'
class ForgetPasswordPage{
    fillUsername(){
        cy.get("input[name='username']").type(testData.validUsername);
        cy.get('.orangehrm-forgot-password-button--reset').click();
        cy.get('.orangehrm-forgot-password-title').should('have.text', 'Reset Password link sent successfully');
    }
}
export default ForgetPasswordPage;