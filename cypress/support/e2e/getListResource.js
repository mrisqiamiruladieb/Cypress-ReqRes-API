describe('ReqRes API Get List <Resource> Testing', () => {
    it('Get List <Resource>', () => {

        cy.request('GET', '/unknown').as('listResource');

        cy.get('@listResource').then(listResource => {
            expect(listResource.status).to.equal(200);
            expect(listResource.body).to.haveOwnProperty('total_pages');
        })
        
    })
})