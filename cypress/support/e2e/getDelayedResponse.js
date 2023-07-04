describe('ReqRes API Get Delayed Response Testing', () => {
    const delayedResponse = {
        method : 'GET',
        url : '/users',
        qs : {
            delay : '3'
        }
    }

    it('Get Delayed Response', () => {
        cy.request(delayedResponse).as('delayedResponse');
        cy.get('@delayedResponse').then(delayedResponse => {
            expect(delayedResponse.status).to.equal(200);
            expect(delayedResponse.body).to.haveOwnProperty('data');
        })
    })

})