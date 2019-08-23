function server () {
    cy.server()
    cy.route({
    method: 'GET',
    url: 'http://mydev.admin.sankuai.com/psgs/**',
    status: 200,
    delay: 500,
    onRequest: (xhr) => {
        // do something with the
        // raw XHR object when the
        // request initially goes out
    },
    onResponse: (xhr) => {
        console.log(xhr)
        // do something with the
        // raw XHR object when the
        // response comes back
    }
    })
}

module.exports = {
    server
}