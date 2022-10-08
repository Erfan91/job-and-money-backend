const EducationModel = require('../models/EducationModel');
const CvModel = require('../models/CvModel');

module.exports.eduPost = (req,res,next)=>{
    const body = req.body
    EducationModel.create(body).then(result=>{
        console.log(result)
        res.json(result)
        CvModel.findOneAndUpdate({ownerId:body.ownerId},{$push:{education:result._id}})
        .then(response=>{
            console.log(response, "Education Added to Cv")
        })
    })
}

module.exports.eduGet = (req,res,next)=>{
    EducationModel.find()
    .exec()
    .then(result=>{
        console.log(result)
        res.json(result)
    })
}

module.exports.eduUpdate = (req,res,next)=>{
    const body = req.body;
    EducationModel.updateOne({title:body.title}, {major:body.major})
    .then(result=>{
        console.log(result)
        res.json(result)
    })

}

module.exports.eduDelete = (req,res,next)=>{
    const body= req.body;
    EducationModel.deleteOne({title:body.title})
    .then(result=>{
        console.log(result)
        res.json({message:'Deleted successfully'})
    })
}