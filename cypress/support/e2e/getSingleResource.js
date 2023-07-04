describe('ReqRes API Get Single <Resource> Testing', () => {
    it('Get Single <Resource>', () => {

        cy.request('GET', '/unknown/2').as('singleResource');

        cy.get('@singleResource').then(singleResource => {
            expect(singleResource.status).to.equal(200);
            expect(singleResource.body).to.haveOwnProperty('support');
        })
        
    })
})