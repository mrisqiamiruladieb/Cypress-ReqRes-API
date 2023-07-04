describe('ReqRes API Creates a user Testing', () => {
    it('Creates a user', () => {
        let body = {
            "email": Cypress.env('email'),
            "password": Cypress.env('password')
        }

        cy.request('POST', '/register', body).as('createUser');
        cy.get('@createUser').then(createUser => {
            expect(createUser.status).to.equal(200);
            expect(createUser.body).to.haveOwnProperty('token');
        })

    })
})