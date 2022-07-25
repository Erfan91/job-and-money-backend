const CvModel = require('../models/CvModel');

module.exports.cvPost = (req,res,next)=>{
    const body = req.body
    CvModel.create(body).then(result=>{
        console.log(result)
        res.json(result)
    })
}

module.exports.cvGet = (req,res,next)=>{
    CvModel.find()
    .exec()
    .then(result=>{
        console.log(result)
        res.json(result)
    })
}

module.exports.cvUpdate = (req,res,next)=>{
    const body = req.body;
    CvModel.updateOne({firstName:'Beast'}, {lastName:body.lastName})
    .then(result=>{
        console.log(result)
        res.json(result)
    })
}

module.exports.cvDelete = (req,res,next)=>{
    const body = req.body;
    CvModel.deleteOne({lastName:body.lastName})
    .then(result=>{
        console.log(result)
        res.json({message:"deleted successfuly"})
    })
}