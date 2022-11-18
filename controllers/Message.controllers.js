const mongoose = require('mongoose');
const MsgModel = require('../models/MessageModel')
const UserModel = require('../models/UserModel');
module.exports.msgPost = (req,res,next)=>{
    const body = req.body
    MsgModel.find({sender: body.sender, receiver: body.receiver})
    .exec()
    .then(result=>{
        if(result.length){
            MsgModel.updateOne({sender: body.sender, receiver: body.receiver},{$push:{content:body.content}})
            .then(response=>{
                console.log(response, "your message model updated")
                res.json(result)
            })
        }else{
            MsgModel.create(body)
            .then(resp=>{
                console.log(resp,"message model created")
                res.json(resp)
            })
        }
    })
}

module.exports.msgRePost = (req,res,next)=>{
    const body = req.body
    MsgModel.updateOne({_id:body.msgId},{$push:{content:body.content}})
    .then(result=>{
        console.log(result)
        res.json(result)

    })
}

module.exports.msgGetOne = (req,res,next) =>{
    const id = req.params.id
    MsgModel.find({receiver: id})
    .populate('sender')
    .populate('receiver')
    .sort({createdAt: -1})
    .exec()
    .then(result=>{
        console.log(result)
        res.json(result)
    })
}

module.exports.msgGet = (req,res,next)=>{
    const id = req.params.id
    const iId = req.params.iId
    MsgModel.find({sender: id, receiver:iId})
    .populate('sender')
    .populate('receiver')
    .exec()
    .then(result=>{
        console.log(result)
        res.json(result)
    })
}

module.exports.msgGetUserMsg = (req,res,next) =>{
    const id = req.params.id
    const iId = req.params.iId
    MsgModel.find({sender: iId, receiver:id})
    .populate('sender')
    .exec()
    .then(result=>{
        console.log(result)
        res.json(result)
    })
}

module.exports.msgUpdate = (req,res,next)=>{
    const body = req.body
    MsgModel.updateOne(body.id,{content: "barbie"}, {content: body.content})
    .then(result=>{
        console.log(result)
        res.json(result)
    })
}

module.exports.msgDelete = (req,res,next)=>{
    const body = req.body
    MsgModel.deleteOne({content: body.content})
    .then(result=>{
        console.log(result)
        res.json(result)
    })
}