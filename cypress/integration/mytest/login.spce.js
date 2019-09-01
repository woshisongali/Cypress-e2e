const {SERVER, USERINFO}  = require('../../../config/env')
const {WEB} = require('./global')



const LOGINURL =`http://ssosv.it.beta.sankuai.com/sson/login`;
const redirect_uri = `http%3A%2F%2F11259-wlcnv-sl-kladmin.bb.dev.sankuai.com%2Fcallback&client_id=baobab-a`

/** 
 * cy 默认的每一块测试用例都会对cookie进行清空， 
 * 为了防止重复登陆可对Cookie进行白名单的设置
*/
Cypress.Cookies.debug(false)
Cypress.Cookies.defaults({
    whitelist: [
        'ssoid', 
        'sso.saveRequest',
        'markid',
        '_lxsdk_s',
        '_lxsdk_cuid',
        '_lxsdk'
    ]
})

function toLogin () {
    let loginUrl = `${LOGINURL}?t=${Date.now()}&redirect_uri=${redirect_uri}`
    cy.visit(loginUrl)
    // cy.get('#form-img').click()
    cy.wait(500)
    cy.get('#login-username').type(USERINFO.name)
    // cy.get('#login-password').type(USERINFO.passWord)
    cy.get('#form-submit').submit()
    cy.wait(500)
    cy.visit(WEB.curUrl)
}


Cypress.Commands.add('login', () => {
    toLogin();
})

module.exports = {
    toLogin
}

