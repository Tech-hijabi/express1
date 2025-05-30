const express = require('express')
const User = require('./routers/user')
const connectdb = require('./mongo-db/mongodb')
require('dotenv').config()


connectdb()
const app = express()
const port = process.env.PORT


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api', User)


app.listen(port, () => {
    console.log(`My server is running on port ${port}`)
})