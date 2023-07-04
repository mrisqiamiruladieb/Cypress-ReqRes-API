describe('ReqRes API Post Create Testing', () => {
    
    it('Post Create', () => {
        
        let body = {
            "name": Cypress.env('name'),
            "job": Cypress.env('job')
        }

        cy.request('POST', '/users', body).as('postCreate');
        
        cy.get('@postCreate').then(postCreate => {
            expect(postCreate.status).to.equal(201);
            expect(postCreate.body).to.haveOwnProperty('id');
        })

    })

})