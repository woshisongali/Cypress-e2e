/** 
 * hope result is
 * {
 *  type: the element type,
 * title: the element title desc,
 * selecter: how to select the element again
 * 
 * }
*/

/** 
 * 考虑到结构可能发生变化， 不对该方法进行进一步的抽离
*/
const typeMap = {
    'singInput': function (group) {
        let result = {}
        let elements = group.find('> input')
        if (elements.length > 0) {
            result.selector = elements.eq(0)
        } else {
            result = false;
        }
        return result;
    },
    'select': function (group) {
        let result = {}
        let elements = group.find('.uix-select-container')
        if (elements.length > 0) {
            result.selector = elements.eq(0)
            result.cySelector = `body form`
        } else {
            result = false
        }
        return result
    }
}

class keysSearch {
    constructor (form, formIndex) {
        this.form = form
        this.keyElements = []
        this.formIndex = formIndex
        this.curGroupIndex = -1
        this.init()
    }
    init () {
        let formgroup = this.form.find('.form-group');
        for (let i = 0, len = formgroup.length; i < len; i++) {
            let group = formgroup.eq(i)
            this.curGroupIndex = i
            let result = false;
            for (let key in typeMap) {
                result = typeMap[key].bind(this)(group)
                if (result) {
                    result.type = key
                    break
                }
            }
            if (result) {
                result.title = group.find('label').text()
                this.keyElements.push(result)
            }
        }
        this.triggerSelectors()
    }

    clearCurGroupIndex () {
        this.curGroupIndex = -1
    }

    triggerSelectors () {
        cy.wait(1000)
        cy.get('.btn-primary').scrollIntoView().click().then(element => {
            console.log('hasss')
        })

        this.keyElements.forEach(item => {
            if (item.type === 'select' && item.selector.find) {
                // console.log(item)
                cy.wait(1000)
                // item.selector.find('.btn')
                cy.wrap(item.selector).find('.btn').click()
                .then(() => {
                    console.log(item.selector.find('a').length)
                })
            }
        })
    }
}
module.exports = {
    keysSearch
}