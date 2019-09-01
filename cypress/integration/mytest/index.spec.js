const {toLogin} = require('./login.spce')
const {WEB} = require('./global')
const TESTURL = 'https://www.baidu.com'
const HOST = 'http://mydev.admin.sankuai.com'
const TESTPAGE = `${HOST}/app/adjustTheBack/priceAdjustmentRecord`
const {clickPage} = require('./pageNum.js')
const {server} = require('./server.js')
const {keysSearch} = require('./analyze/keysSearch')

let getKeysSearchPromise = null;
let keySearchAnaly = () => {
  return new Promise((resolve, reject) => {
    it('analyze operater elements', () => {
      cy.get('body form').then(($el) => {
        for (let index = 0, formLen = $el.length; index < formLen; index++) {
          let form = $el.eq(index)
          let formType = null
          let buttons = form.parent().find('button')
          for (let i = 0; i < buttons.length; i++) {
            if (~buttons[i].innerHTML.indexOf('查询')) {
              formType = 'keysSearch'
              break
            }
          }
          let searcher = new keysSearch(form, index)
          resolve(searcher)
        }
      })
    })
  })
}

describe('the block', () => {
  WEB.curUrl = TESTPAGE
  before(() => {
    server()
    toLogin()
  })
  it('start test the page', () => {
    // 确保能取到页面信息，  等待1000ms 有些丑陋  TODO待优化
    cy.url().should('include', '/adjustTheBack')
  })

  

  getKeysSearchPromise = keySearchAnaly()

  // it('test the keysSearch item length', () => {
  //   getKeysSearchPromise.then(searcher => {
  //     console.log('the search ====')
  //   })
  // })
  
  describe("helloWorld function", () => {
    console.log('you to see')
    getKeysSearchPromise.then(searcher => {
      console.log('the search ====')
    })
  })
  
  it('test click page', () => {
    clickPage()
  })

})
