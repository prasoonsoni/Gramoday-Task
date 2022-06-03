const mongoose = require('mongoose')
const { Schema } = mongoose

const ReportDetails = new Schema({
    userID:{
        type:String,
        required:true
    },
    marketID:{
        type:String,
        required:true
    },
    marketName:{
        type:String,
        required:true
    },
    cmdtyID:{
        type:String,
        required:true
    },
    marketType:{
        type:String,
        default:"Mandi"
    }, 
    cmdtyName:{
        type:String,
        required:true
    },
    priceUnit:{
        type:String,
        default:"Kg"
    },
    convFctr:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    reportID:{
        type:String,
        required:true
    },
    timestamp:{
        default:Date.now,
        type:Date
    }
})

module.exports = mongoose.model('ReportDetails', ReportDetails)