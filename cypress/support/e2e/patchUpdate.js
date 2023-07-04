describe('ReqRes API Patch Update Testing', () => {
    it('Patch Update', () => {
        let body = {
            "name": Cypress.env('name'),
            "job": Cypress.env('job02')
        }

        cy.request('PATCH', '/users/2', body).as('patchUpdate');
        cy.get('@patchUpdate').then(patchUpdate => {
            expect(patchUpdate.status).to.equal(200);
            expect(patchUpdate.body).to.haveOwnProperty('updatedAt');
        })

    })
})