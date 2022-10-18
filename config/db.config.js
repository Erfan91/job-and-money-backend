const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect('mongodb://0.0.0.0:27017/jobandmoney')
.then(()=>console.log('connected to db'))
.catch((err)=>console.log(err))