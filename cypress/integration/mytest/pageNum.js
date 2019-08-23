function clickPage () {
    cy.get('.pull-right > :nth-child(4) > .ng-binding').click()
}
module.exports = {
    clickPage
}