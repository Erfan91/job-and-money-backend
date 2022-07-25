const UserModel = require('../models/UserModel');
const bcrypt = require('bcrypt');
const localStrategy = require('passport-local').Strategy;

module.exports = function(passport){
    passport.use(
        new localStrategy((username,password,done)=>(
            UserModel.findOne({userName:username},(err,user)=>{
                if(err){console.log(err)}
                if(!user) return done(null,false)
                bcrypt.compare(password, user.password, (err,result)=>{
                    if(err){console.log(err)}
                    if(result === true){
                        return done(null,user)
                    }else{
                        return done(null,false)
                    }
                })
            })
        ))
    )


    passport.serializeUser((user,done)=>{
        done(null,user.id)
    })
    passport.deserializeUser((id,done)=>{
        UserModel.findOne({_id:id}, (err,user)=>{
            done(err,user)
        })
    })
}