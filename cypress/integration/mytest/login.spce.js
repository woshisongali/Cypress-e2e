const {SERVER, USERINFO}  = require('../../../config/env')
const {WEB} = require('./global')



const LOGINURL =`http://ssosv.it.beta.sankuai.com/sson/login`;
const redirect_uri = `http%3A%2F%2F11259-wlcnv-sl-kladmin.bb.dev.sankuai.com%2Fcallback&client_id=baobab-a`

 function toLogin () {
    // describe('has logined or not', () => {
            
        // check if has logined
        // it('cy request', () => {
        //     cy.request({
        //         method: 'GET',
        //         url: `${SERVER.port}${SERVER.userUrl}`,
        //         failOnStatusCode: false
        //     }).as('judgeLogin').then((resp) => {
        //         if (resp.status === 401) {
        //             // loginReq()
        //         } else {
        //         }
        //     })

        // })

        // it('fdsfdsf', () => {
            let loginUrl = `${LOGINURL}?t=${Date.now()}&redirect_uri=${redirect_uri}`
            cy.visit(loginUrl)
            // cy.get('#form-img').click()
            cy.wait(500)
            cy.get('#login-username').type(USERINFO.name)
            // cy.get('#login-password').type(USERINFO.passWord)
            cy.get('#form-submit').submit()
            cy.wait(500)
            cy.visit(WEB.curUrl)
        // })
    // })
}

module.exports = {
    toLogin
}
