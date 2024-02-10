const express = require('express')
const mongoConnect = require('./db/database.js')

const app = express()

mongoConnect(client => {
    console.log(client)
    app.listen(3000, () => {
        console.log('app listening at 3000')
    })

})