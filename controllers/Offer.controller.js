const OfferModel = require('../models/OfferModel')
const multer = require('multer')
const path = require('path')
const { json } = require('express')
const UserModel = require('../models/UserModel')
const NotificationModel = require('../models/NotificationModel')
module.exports.offerPost = (req,res,next)=>{
    const body = req.body
    OfferModel.create(body).then(result=>{
        console.log(result)
        res.json(result)
    })
}

module.exports.offerGet = (req,res,next)=>{
    OfferModel.find()
    .populate('posterID')
    .then(result=>{
        console.log(result)
        res.json(result)
    })
}

module.exports.offerGetApplied = (req,res,next)=>{
    const body = req.params._id
    OfferModel.findOne({candidates:body})
    .exec()
    .then(result=>{
        console.log(result)
        res.json(result)
    })
}

module.exports.offerGetNtfnOffer = (req,res,next)=>{
    const id = req.params.id
    OfferModel.findById(id)
    .populate('posterID')
    .populate('candidates')
    .exec()
    .then(result=>{
        console.log(result)
        res.json(result)
    })
}

module.exports.offerUpdate = (req,res,next)=>{
    const body = req.body;
    OfferModel.find({candidates:{$in:body.workerId}, _id:body.offerId})
    .exec()
    .then(result=>{
        if(result.length){
            console.log(result)
            res.json({message:"You have already applied for this offer"})
        }else{
            OfferModel.findByIdAndUpdate(body.offerId,{$push:{candidates: body.workerId}})
            .then(result=>{
                if(result){
                    console.log(result)
                    res.json({message:"You have successfully applied for this offer"})
                    NotificationModel.create({
                        ownerId:body.posterId,
                        subjectId: body.offerId,
                        userId:body.workerId,
                        message:" applied to your offer"
                    }).then(result=>{
                        console.log(result, "This is notification Result")
                    })
                }
            })
        }
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

let imageName = "";
const storage = multer.diskStorage({
    destination: path.join("./images"),
    filename:function (req,file,cb){
        imageName = Date.now() + path.extname(file.originalname);
        cb(null,imageName)
    }
})
const upload = multer({
    storage:storage,
    limits:{fileSize:3000000},
}).single('myImage')


module.exports.imgUpload = (req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log(req.body)
            return res.status(201)
            .json({url:"http://localhost:3001/images/" + imageName})
        }
    })
}