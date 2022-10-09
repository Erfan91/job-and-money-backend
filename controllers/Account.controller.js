const AccountModel = require('../models/AccountModel');

module.exports.accPost = (req,res,next)=>{
    const body = req.body
    AccountModel.create(body)
    .then(result=>{
        console.log(result)
        res.json(result)
    })
}

module.exports.accGet = (req,res,next)=>{
    const body = req.params._id;
    AccountModel.findOne({ownerId:body})
    .exec()
    .then(result=>{
        console.log(result)
        if(result){
            res.json(result)
        }else{
            res.json(null)
        }
    })

}

module.exports.accUpdate = (req,res,next)=>{
    const body = req.body;
    AccountModel.updateOne({fullName:body.fullName}, {cvv: body.cvv})
    .then(result=>{
        console.log(result)
        res.json(result)
    })
}

module.exports.accDelete = (req,res,next)=>{
    const body = req.body;
    AccountModel.deleteOne({ownerId:body.ownerId})
    .then(result=>{
        console.log(result)
        res.json(result)
    })
}