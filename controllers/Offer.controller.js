const OfferModel = require('../models/OfferModel')
const multer = require('multer')
const path = require('path')

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

module.exports.offerUpdate = (req,res,next)=>{
    const body = req.body;
    OfferModel.findByIdAndUpdate(body.offerId,{$push:{candidates: body.workerId}})
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