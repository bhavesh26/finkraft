const express = require('express')
const bookingRouter = express.Router()

//import model
const {Booking} = require('../model/bookingModel')

bookingRouter.post('/' , async(req,res)=> {
    const body = req.body;
    try {
        await Booking.create(body)
        res.send({
            status : 200,
            message : "success"
        })
    }catch(err){
        console.log(err)
        res.send({
            status : 400 , 
            message : "failure"
        })
    }
})

bookingRouter.get('/' , async(req,res)=> {
    try{
        const booking = await Booking.find()
        
        res.send({
            data : booking
        })
    }
    catch(err){
        console.log(err)
        res.send({
            status : 404,
            message : err
        })
    }
})

bookingRouter.get('/:id' , async(req,res)=> {
    const bookingId = req.params.id;
    
    try{
        const booking = await Booking.findOne({booking_id: bookingId})
        
        res.send({
            data : booking
        })
    }
    catch(err){
        console.log(err)
        res.send({
            status : 404,
            message : err
        })
    }
})

module.exports = {bookingRouter}