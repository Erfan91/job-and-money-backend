const CvModel = require('../models/CvModel');
const multer = require('multer')
const path = require('path')
module.exports.cvPost = (req,res,next)=>{
    const body = req.body
    CvModel.create(body).then(result=>{
        console.log(result)
        res.json(result)
    })
}

module.exports.cvGet = (req,res,next)=>{
    const id = req.params.id
    CvModel.findOne({ownerId:id})
    .populate('experience')
    .populate('education')
    .populate('ownerId')
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