const ExperienceModel = require('../models/ExperinceModel')

module.exports.expPost = (req,res,next)=>{
    const body = req.body
    ExperienceModel.create(body).then(result=>{
        console.log(result)
        res.json(result)
    })
}

module.exports.expGet = (req,res,next)=>{
    ExperienceModel.find()
    .exec()
    .then(result=>{
        console.log(result)
        res.json(result)
    })
}

module.exports.expUpdate = (req,res,next)=>{
    const body = req.body;
    ExperienceModel.updateOne({title:body.title}, {city:body.city})
    .then(result=>{
        console.log(result)
        res.json(result)
    })

}

module.exports.expDelete = (req,res,next)=>{
    const body= req.body;
    ExperienceModel.deleteOne({title:body.title})
    .then(result=>{
        console.log(result)
        res.json({message:'Deleted successfully'})
    })
}