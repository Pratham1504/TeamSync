require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');

// import routes 
const projectRoutes = require('./routes/project')

//express app
const app = express();

//middleware
app.use(express.json())
app.use((req,res,next)=>{
        // console.log(req.path,req.method)
        next()
})

//routes
app.use('/projects/',projectRoutes)


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