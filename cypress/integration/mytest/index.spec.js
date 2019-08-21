const {toLogin} = require('./login.spce')
const {WEB} = require('./global')
const TESTURL = 'https://www.baidu.com'
const HOST = 'http://mydev.admin.sankuai.com'
const TESTPAGE = `${HOST}/app/priceManage/priceQuery`

async function clickPage (select, index) {
  cy.get(`${select} > li:nth-child(${index}) a`).click()
  cy.get('button.btn').contains('导出').click()
}
describe('The Home Page', async () => {
    WEB.curUrl = TESTPAGE
    await toLogin()
})

describe('the second block', () => {
  it('the third test', async () => {
    // 确保能取到页面信息，  等待1000ms 有些丑陋  TODO待优化
    cy.wait(1000)
    cy.url().should('include', '/priceQuery')
    await clickPage('ul.pagination', 2)
  })
})