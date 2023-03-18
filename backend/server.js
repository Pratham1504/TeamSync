require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');

//express app
const app = express();

//middleware
app.use(express.json())
app.use((req,res,next)=>{
        // console.log(req.path,req.method)
        next()
})

//routes



//connect to db
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
        
    //listen for requests
    app.listen(process.env.PORT,()=>{
        console.log(`connected to db & listening to the port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log(err);
})