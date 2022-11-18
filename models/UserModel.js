const router = require('express').Router();
const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    employer:Boolean,
    userName:String,
    name: String,
    surName: String,
    dateOfBirth: Date,
    email:String,
    password:String,
    phoneNumber:String,
    image:String,
    aboutMe: String,
    cv:{
        type:mongoose.Types.ObjectId,
        ref:'Cv'
    },
    bankAccount:{
        type:mongoose.Types.ObjectId,
        ref:'accounts'
    },
    website: String
},
{
    timestamps:true
}
);

const UserModel = new mongoose.model('User', UserSchema);
module.exports = UserModel;
// module.exports = router;