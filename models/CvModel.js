const router = require('express').Router();
const mongoose = require('mongoose');

const CvSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    jobTitle:String,
    contactNumber:String,
    email:String,
    personalDescription:String,
    education:String,
    experience:String,
    achievement:String,
    softSkills:String,
    hardSkills:String,
    experienceDocs:String
})

const CvModel = new mongoose.model('Cv',CvSchema);

module.exports = CvModel;