const router = require('express').Router();
const mongoose = require('mongoose');

const AccountShcema = new mongoose.Schema({
    fullName : String,
    validityDate : Date,
    cardNumber : Number,
    cvv : Number,
    cardName: String,
    ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})

const AccountModel = new mongoose.model('Account', AccountShcema);

module.exports = AccountModel
