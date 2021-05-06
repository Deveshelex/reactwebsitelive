const dotenv=require("dotenv");
const mongoose= require('mongoose');
const express = require('express');
const app=express();

dotenv.config({path: './config.env'});

const PORT= process.env.PORT;
require('./db/conn');
const User=require('./model/userSchema');

app.use(express.json());

//we link the router files to make our route easy
app.use(require('./router/auth'));

// mongoose.connect(DB, {
//     useNewUrlParser:true,
//     useCreateIndex:true,
//     useUnifiedTopology:true,
//     useFindAndModify:false
// }).then(()=>{
//     console.log(`connection successful`);
// }).catch((err) => console.log(err));

//Middleware
const middleware = (req,res,next)=>{
    console.log(`Hello my Middleware`);
    next();
}
// middleware();

app.get('/', (req,res) =>{
    res.send(`Hello World from the server`);
})
// console.log('Hey how r you??');

app.get('/about',middleware ,(req,res)=>{
    res.send(`Hello world from about me`)
})

app.get('/contact',(req,res)=>{
    res.send(`Hello world from about me`)
})

app.get('/signin',(req,res)=>{
    res.send(`Hello world from about me`)
})

app.get('/signup',(req,res)=>{
    res.send(`Hello world from sign up`)
})

app.listen(PORT,() =>{
    console.log(`server is running at port no ${PORT}`);
})