describe('ReqRes API Creates a session Testing', () => {
    it('Creates a session', () => {
        let body = {
            "email": Cypress.env('email'),
            "password": Cypress.env('password02')
        }

        cy.request('POST', '/login', body).as('createSession');
        cy.get('@createSession').then(createSession => {
            expect(createSession.status).to.equal(200);
            expect(createSession.body).to.haveOwnProperty('token');
        })
        
    })
})