describe('ReqRes API Put Update Testing', () => {
    it('Put Update', () => {
        let body = {
            "name": Cypress.env('name'),
            "job": Cypress.env('job02')
        }

        cy.request('PUT', '/users/2', body).as('putUpdate');
        cy.get('@putUpdate').then(putUpdate => {
            expect(putUpdate.status).to.equal(200);
            expect(putUpdate.body).to.haveOwnProperty('updatedAt');
        })

    })
})