const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017/magesDB");

const bookingSchema = new mongoose.Schema({
    booking_id: {
        type: String,
        require: true
    },
    customerName: {
        type: String,
        require: true
    },
    amount:{
        type : Number ,
        require:true} ,
    vendorDetails : {
        type : String,
        require:true
    },

    bookingDate:{
        type : Date,
        require:true
    } ,
})

const Booking = new mongoose.model("Booking", bookingSchema)
module.exports = {Booking}