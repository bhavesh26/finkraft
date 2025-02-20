//external dependencies
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

//import routers
const { bookingRouter}  = require('./routes/bookingRoutes')

//internal dependencies
const { connectDB} = require('./config/db')


const app = express()
app.use(express.json()) 

app.use(cors())
connectDB()

app.use('/bookings/' , bookingRouter)


app.listen(3000 , ()=> {
    console.log("port started")
})