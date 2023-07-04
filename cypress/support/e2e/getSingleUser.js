describe('ReqRes API Get Single User Testing', () => {
    it('Get Single User', () => {

        cy.request('GET', '/users/2').as('singleUser');
        
        cy.get('@singleUser').then(singleUser => {
            expect(singleUser.status).to.equal(200);
            expect(singleUser.body).to.haveOwnProperty('data');
        })

    })
})