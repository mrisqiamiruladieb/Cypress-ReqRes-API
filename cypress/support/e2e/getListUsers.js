describe('ReqRes API Get List Users Testing', () => {
    it('Get List Users', () => {

        cy.request('GET', '/users?page=2').as('listUsers');

        cy.get('@listUsers').then(listUsers => {
            expect(listUsers.status).to.equal(200);
            expect(listUsers.body).to.haveOwnProperty('per_page');
        })

    })
})