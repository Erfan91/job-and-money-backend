const router = require('express').Router();
const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
    title:String,
    startDate:Date,
    endDate:Date,
    city:String,
    field:String,
    description:String,
    establishment:String,
    degree:String,
    ownerId:{
        type: mongoose.Types.ObjectId,
        ref:'User'
    }
});

const EducationModel = new mongoose.model('Education', EducationSchema);

module.exports = EducationModel;