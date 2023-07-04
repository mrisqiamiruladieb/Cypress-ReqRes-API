describe('ReqRes API Delete Delete Testing', () => {

    it('Delete Delete', () => {
        cy.request('DELETE', '/users/2').as('deleteDelete');
        cy.get('@deleteDelete').then(deleteDelete => {
            expect(deleteDelete.status).to.equal(204);
        })
    })
    
})