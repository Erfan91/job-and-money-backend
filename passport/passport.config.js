const UserModel = require('../models/UserModel');
const bcrypt = require('bcrypt');
const localStrategy = require('passport-local').Strategy;

module.exports = async function(passport){
    passport.use(
        new localStrategy(async(username,password,done)=>(
              await UserModel.findOne({userName:username},(err,user)=>{
                if(err){console.log(err)}
                if(!user) return done(null,false,"username not found")
                bcrypt.compare(password, user.password, (err,result)=>{
                    if(err){console.log(err)}
                    if(result === true){
                        return done(null,user)
                    }else{
                        return done(null,false,"incorrect password")
                    }
                })
            }).clone()
        ))
    )


    passport.serializeUser((user,done)=>{
        done(null,user.id)
    })
    passport.deserializeUser(async(id,done)=>{
       await UserModel.findOne({_id:id}, (err,user)=>{
            done(err,user)
        })
    })
}