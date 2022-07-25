const OfferModel = require('../models/OfferModel')

module.exports.offerPost = (req,res,next)=>{
    const body = req.body
    OfferModel.create(body).then(result=>{
        console.log(result)
        res.json(result)
    })
}

module.exports.offerGet = (req,res,next)=>{
    OfferModel.find()
    .exec()
    .then(result=>{
        console.log(result)
        res.json(result)
    })
}

module.exports.offerUpdate = (req,res,next)=>{
    const body = req.body;
    OfferModel.updateOne({title:'plumber'},{title:body.title})
    .then(result=>{
        console.log(result)
        res.json(result)
    })
}

module.exports.offerDelete = (req,res,next)=>{
    const body = req.body;
    OfferModel.deleteOne({estimatedTime:'3 hours'})
    .then(result=>{
        console.log(result)
        res.json({message:'deleted correctly'})
    })
}