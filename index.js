require('dotenv').config({path:'./config/.env'});
require('./config/db.config')

const express = require('express');
const app = express()
const port = 3001 || process.env.PORT;
const mongoose = require('mongoose')
const cors = require('cors')
const userRouter = require('./Router/user.router')
const offerRouter = require('./Router/offer.router')
const cvRouter = require('./Router/cv.router');
const passport = require('passport');
const session = require('express-session')
const cookieParser = require('cookie-parser')
app.use(express.json())
app.use(session(
    {
        secret:"secretcode",
        resave:true,
        saveUninitialized:true,
        
        
    })    
)
app.use(cookieParser("secretcode"))
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use('/user',userRouter)
app.use('/offer', offerRouter)
app.use('/cv',cvRouter)
app.use('/images', express.static('images'))
app.use(passport.session());
app.use(passport.initialize());

require('./passport/passport.config')(passport);





app.listen(port,()=>{
    console.log('server started at port', port)
})