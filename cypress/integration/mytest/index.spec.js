const {toLogin} = require('./login.spce')
const {WEB} = require('./global')
const TESTURL = 'https://www.baidu.com'
const HOST = 'http://mydev.admin.sankuai.com'
const TESTPAGE = `${HOST}/app/priceManage/priceQuery`
const {clickPage} = require('./pageNum.js')
const {server} = require('./server.js')

describe('the second block', () => {
  WEB.curUrl = TESTPAGE
  before(() => {
    server()
    toLogin()
  })
  it('the third test', () => {
    // 确保能取到页面信息，  等待1000ms 有些丑陋  TODO待优化
    cy.url().should('include', '/priceQuery')
  })
  it('test click page', () => {
    clickPage()
  })

})
