const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        baseUrl : 'https://reqres.in/api',
        specPattern : 'cypress/support/e2e',
        supportFile : false
    },
    env: {
        email : 'eve.holt@reqres.in',
        password : 'pistol',
        password02 : 'cityslicka',
        name : 'morpheus',
        job : 'leader',
        job02 : 'zion resident'
    }
})