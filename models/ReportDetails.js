const mongoose = require('mongoose')
const { Schema } = mongoose

const ReportDetails = new Schema({
    users:{
        type:[String],
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
    price:{
        type:Number,
        required:true
    },
    timestamp:{
        default:Date.now()
    }
})

module.exports = mongoose.model('ReportDetails', ReportDetails)