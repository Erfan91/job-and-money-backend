const NotificationModel = require('../models/NotificationModel');

module.exports.notifPost = (req,res,next)=>{
    const body = req.body;
    NotificationModel.create(body)
    .then(result=>{
        console.log(result)
        res.json(result)
    })
}

module.exports.notifGet = (req,res,next)=>{
    const body = req.params._id
    NotificationModel.find({ownerId:body})
    .populate('subjectId')
    .populate('userId')
    .then(result=>{
        console.log(result)
        res.json(result)
    })
}

module.exports.notifUpdate = (req,res,next)=>{
    const body = req.body;
    NotificationModel.updateOne({ownerId:body.ownerId},{message:body.message})
    .exec()
    .then(result=>{
        console.log(result)
        res.json(result)
    })
}

module.exports.notifDelete = (req,res,next)=>{
    const body = req.body;
    NotificationModel.deleteOne({_id:body.notificationId})
    .then(result=>{
        console.log(result)
        res.json({message:"Notification deleted !"})
    })
}