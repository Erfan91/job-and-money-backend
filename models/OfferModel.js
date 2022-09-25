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
    workers:Number,
    date:Date,
    startingFrom:String,
    estimatedMoney:String,
    address:String,
    city:String,
    postalCode:Number,
    contactMe:String,
    helpWithTransport:String,
    multiLocations:Boolean,
    paymentMethod:String,
    amount:String,
    reply:String,
    images:[String],
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