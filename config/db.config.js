const mongoose = require('mongoose');

mongoose.connect("mongodb://" + process.env.URL_MONGO_DB + "/jobandmoney",()=>{
    console.log('connected to DB successfuly')
    },
    console.log("Error! couldn't connect to DB")
)
