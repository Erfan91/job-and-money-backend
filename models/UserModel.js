const router = require('express').Router();
const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    employer:Boolean,
    userName:String,
    name: String,
    surName: String,
    dateOfBirth: String,
    email:String,
    password:String,
    phoneNumber:String,
    image:String,
    messages:{
        type:mongoose.Types.ObjectId,
        ref:'messages'
    },
    cv:{
        type:mongoose.Types.ObjectId,
        ref:'Cv'
    },
    bankAccount:{
        type:mongoose.Types.ObjectId,
        ref:'accounts'
    },
},
{
    timestamps:true
}
);

const UserModel = new mongoose.model('User', UserSchema);
module.exports = UserModel;
// module.exports = router;