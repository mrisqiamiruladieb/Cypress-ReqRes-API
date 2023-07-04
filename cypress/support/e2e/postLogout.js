describe('ReqRes API Ends a session Testing', () => {
    it('Ends a session', () => {
        cy.request('POST', '/logout').as('endSession');
        cy.get('@endSession').then(endSession => {
            expect(endSession.status).to.equal(200);
        })
        
    })
})