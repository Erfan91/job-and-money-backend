const router = require('express').Router();
const mongoose = require('mongoose');

const CvSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    jobTitle:String,
    contactNumber:String,
    address:String,
    email:String,
    personalDescription:String,
    education:[
        {
            type: mongoose.Types.ObjectId,
            ref: 'Education'
        }
    ],
    experience:[
        {
            type: mongoose.Types.ObjectId,
            ref:'Experience'
        }
    ],
    jmExperience:String,
    achievement:[String],
    softSkills:[String],
    hardSkills:[String],
    experienceDocs:[String],
    ownerId:{
        type: mongoose.Types.ObjectId,
        ref:'User'
    }
})

const CvModel = new mongoose.model('Cv',CvSchema);

module.exports = CvModel;