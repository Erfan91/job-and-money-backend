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

module.exports.srchdOffer = (req,res,next)=>{
    const body = req.body
    OfferModel.find({title:body.title, city:body.city})
    .exec()
    .then(result=>{
        console.log(result)
        res.json(result)
    })
}

//  operation that send all of the offer that one user has created
module.exports.getOffer = (req,res,next) =>{
    const id = req.params._id
    OfferModel.find({posterID: id})
    .exec()
    .then(result=>{
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
            })
        }
    })
}


module.exports.rejectUser = (req,res,next)=>{
    const body  = req.body
    OfferModel.find({candidates:{$in:body.ownerId}, _id: body._id})
    .exec()
    .then(result=>{
        if(result.length){
            OfferModel.updateOne({_id: body._id}, {$pull:{candidates: body.ownerId}})
            .then(response=>{
                console.log("user Id removed from offer/ application rejected", response)
                res.json(response)
                NotificationModel.create({
                    ownerId: body.ownerId,
                    subjectId: body._id,
                    userId: "6377e5b786397ff36de56487",
                    message: "Sorry, your application was unsuccessful.",
                    seen: false
                }).then(resp=>{
                    console.log(resp, "reject application ntfn created")
                })
            })
        }
    })
}


module.exports.hireUser = (req,res,next)=>{
    const body = req.body;
    OfferModel.find({hired:{$in:body.workerId},_id: body.offerId})
    .exec()
    .then(result=>{
        if(result.length){
            console.log('user has been hired already')
            res.json({message:'user has been hired already'})
        }else{
            try{
                OfferModel.findByIdAndUpdate(body.offerId,{$push:{hired: body.workerId}})
                .then(response=>{
                    console.log(response,"User hired")
                    res.json({response:response,message:"User hired"})
                    NotificationModel.create({
                        ownerId: body.workerId,
                        subjectId: body.offerId,
                        userId: "6377e5b786397ff36de56487",
                        message: "Hired! your application has been accpeted🙌😎",
                        seen: false
                    }).then(resp=>{
                        console.log(resp, "hired Notification saved!")
                    })
                })
            }catch(err){
                throw err 
            }
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