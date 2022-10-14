const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
    ownerId:{
        type: mongoose.Types.ObjectId,
        ref:'User'
    },
    subjectId:{
        type: mongoose.Types.ObjectId,
        ref:'Offers'
    },
    userId:{
        type: mongoose.Types.ObjectId,
        ref:'User'
    },
    notificationId:{
        type: mongoose.Types.ObjectId,
        ref:'Notification'
    },
    message:String,
    seen:Boolean
},{
    timestamps:true
});

const NotificationModel = new mongoose.model('Notification', NotificationSchema);

module.exports = NotificationModel;