import LoginPage from "../support/pageObject/LoginPage";

const baseUrl = Cypress.env('baseUrl');
const loginPage = new LoginPage;
describe('Dashboard Page Suit', ()=>{
    beforeEach(()=>{
        cy.visit(baseUrl);
        loginPage.loginValidUser();
    });

    it('Test-Case 5: Check widgets on dashboard page', ()=>{
        cy.get('.orangehrm-dashboard-grid').each(($el)=>{
            expect($el).to.be.visible;
        });
    });

    it('Test-Case 6: Check navigation menu', ()=>{
        const menuList = ["Admin", "PIM", "Leave", "Time", "Recruitment", "My Info", "Performance", "Dashboard", "Directory", "Maintenance", "Claim", "Buzz"];

        cy.get('.oxd-main-menu-item--name').each(($el, index)=>{
             cy.wrap($el).invoke('text').then((text) => {
                expect(text).to.eq(menuList[index]);
        });
    });
    });

    it('Test-Case 7: Hide navigation menu', ()=>{

    cy.get('.oxd-main-menu-item').each(($el) => {
        cy.wrap($el).should('not.have.class', 'toggle');
        });
        cy.get('.oxd-icon-button.oxd-main-menu-button').click();
        cy.get('.oxd-main-menu-item').each(($el) => {
        cy.wrap($el).should('have.class', 'toggle');
        });

    });

    it.only('Test-Case 8:Transition through Quick Launch', ()=>{

        cy.get('.oxd-text.oxd-text--p').contains('Quick Launch').should('be.visible');
        cy.get("button[title='Assign Leave']").click();
        cy.url().should('contain', 'assignLeave');
        cy.get('div.orangehrm-card-container > h6').should('have.text', 'Assign Leave');
    });
});