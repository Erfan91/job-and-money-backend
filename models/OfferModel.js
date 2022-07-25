const router = require('express').Router()
const mongoose = require('mongoose');
const OfferSchema = new mongoose.Schema({
    title:String,
    posterID:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    },
    estimatedTime:String,
    specialist:Boolean,
    description:String,
    shifts:String,
    estimatedMoney:String,
    address:String,
    contactMe:String,
    helpWithTransport:String,
    multiLocations:Boolean,
    candidates:[
        {
            type:mongoose.Types.ObjectId,
            ref:'User'
        }
    ],
    hired:[
        {
            type: mongoose.Types.ObjectId,
            ref:'User'
        }
        ]
        
},
{
    timestamps:true
}
)

const OfferModel = new mongoose.model('Offers', OfferSchema)

module.exports = OfferModel;