const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/AirbnbDBex'


const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected..')
})

app.use(express.json())

const roomRouter =  require('./routers/rooms')
app.use('/rooms',roomRouter)

app.listen(3000, () => {
    console.log('Server started')
})