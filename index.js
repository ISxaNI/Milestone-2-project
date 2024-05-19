require ('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')



app.get('/', (req, res) => {
    res.send('i dont like panos')
})

app.listen(3000)
