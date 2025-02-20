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
        res.status(403).json({
            status : 400 , 
            message : "failure"
        })
    }
})

bookingRouter.get('/' , async(req,res)=> {
    try{
        const booking = await Booking.find()
        
        res.status(200).json({
            data : booking
        })
    }
    catch(err){
        console.log(err)
        res.status(404).json({
            status : 404,
            message : err
        })
    }
})

bookingRouter.get('/:id' , async(req,res)=> {
    const bookingId = req.params.id;
    
    try{
        const booking = await Booking.findOne({booking_id: bookingId})
        if(!booking){
            res.status(403).json({
                status : 403,
                message: "booking_not_found"
            })
        }
        
        res.status(200).json({
            data : booking
        })
    }
    catch(err){
        console.log(err)
        res.status(404).json({
            status : 404,
            message : err
        })
    }
})

bookingRouter.delete('/:id' , async(req,res)=> {
    const bookingId = req.params.id;
    console.log("here")
    try{
        const booking   = await Booking.deleteOne({booking_id : bookingId})
        if(!booking){
            res.status(403).json({
                message : "booking_not_present"
            })
        }
        res.status(200).json({
            status: 200 , 
            message : "booking deleted"
        })
    }
    catch(e){
       res.status(403).json({
           status : 403,
            message : e
        })
    }
})

module.exports = {bookingRouter}