const router = require('express').Router();
const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
    title:String,
    startDate:Date,
    endDate:Date,
    city:String,
    description:String,
    company:String,
    ownerId:{
        type: mongoose.Types.ObjectId,
        ref:"User"
    }
});

const ExperienceModel = new mongoose.model('Experience', ExperienceSchema);
module.exports = ExperienceModel;