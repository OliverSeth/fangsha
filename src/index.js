const router = require('./router/app')
const express = require('express')
const app = express()

app.use('/', router)
app.listen(3000)
console.log('success listen at port:3000......')
