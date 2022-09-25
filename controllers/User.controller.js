const UserModel = require('../models/UserModel');
const bcrypt = require('bcrypt')
const multer = require('multer')
const path = require('path')
const passport = require('passport')

module.exports.userPost = async (req,res,next)=>{
    const body = req.body;
    const hashedPassword = await bcrypt.hash(body.password, 10)
    UserModel.findOne({userName:body.userName})
    .exec()
    .then(result=>{
        if(result){
            console.log(result)
            res.json({issue:true})   
            return;
        }
        if(!result){
            UserModel.findOne({email:body.email})
            .exec()
            .then(response=>{
                console.log(response,"with email")
                if(response){

                    res.json({issue:false})
                }
                if(!response){
            UserModel.insertMany({
                        employer:body.employer,
                        userName:body.userName,
                        name:body.name,
                        surName:body.surName,
                        dateOfBirth:body.dateOfBirth,
                        email:body.email,
                        password:hashedPassword,
                        phoneNumber:body.phoneNumber,
                        image:body.image
                    }).then(result=>{
                        console.log(result)
                        res.json(result)
                
                    })
                }
            })
        }
    })
           
    
}

module.exports.userGet = (req,res,next)=>{
    UserModel.find()
    .exec()
    .then(result=>{
        console.log(result)
        res.json(result)
    })
}

module.exports.userUpdate = (req,res,next)=>{
    const body = req.body;
    UserModel.updateOne({name:'ErfanOOOoo'}, {name:body.name})
    .then(result=>{
        console.log(result)
        res.json(result)
    })
}


module.exports.userDelete = (req,res,next)=>{
    const body = req.body;
    UserModel.deleteOne({name:body.name})
    .then(result=>{
        console.log(result)
        res.json({message:'user deleted!!'})
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

module.exports.userLogin = (req,res,next)=>{
    const body = req.body
    console.log(body)
    passport.authenticate('local',(err,user,info) => {
        // console.log(Boolean(user))
        // console.log(user._id,"DB USER><>>>>>>>>>>>>>>>>>>>>>")
        if(err){console.log(err)}
        if(!user){
            res.json({authenticated:false, userInfo:info})
        }
        else{
            req.logIn(user,err =>{
                if(err){console.log(err)}
                res.json(
                {
                 authenticated:true,
                 userInfo:info,
                 id:user._id,
                 employer:user.employer
                }
                )
            })
        }
    })(req,res,next)
}

module.exports.getInfo = (req,res,next)=>{
    const id = req.params._id;
//    const _id = JSON.parse(id)
    UserModel.findById(id)
    .exec()
    .then(result=>{
        console.log(result)
        res.json(result)
    })

}