const jwt=require('jsonwebtoken')
const express= require('express');
const User = require('../model/userSchema');
const router=express.Router();
const bcrypt=require('bcryptjs')

router.get('/', (req,res) =>{
    res.send(`Hello World from the server router js`);
});

// router.post('/register',(req,res)=>{
//     console.log(req.body);
//     res.send({message: req.body})
// });

router.post('/register',async (req,res) => {
    const {name,email,phone,work,password,cpassword} =req.body;

    if(!name || !email  || !phone || !work || !password || !cpassword){
        return res.status(422).json({error: 'Plz fill the fields properly'})
    }

    try{
        const userExist= await User.findOne({email:email});
        if(userExist){
            return res.status(422).json({error:"Email already exist"});
        }else if(password != cpassword){
            return res.status(422).json({error:"passwords are not matching"});
        }else{
            const user=new User({name,email,phone,work,password,cpassword});
            await user.save(); //saving in database

            res.status(201).json({message: "user registered sucessfully"})
        }
        
    }
    catch(err){
        console.log(err);
    }
})

//login route
router.post('/signin',async (req,res) => {
    try{
        let token;
        const {email,password}= req.body;

        if(!email || !password){
            return res.status(400).json({error:"Plz fill the data"})
        }
        const userLogin=await User.findOne({email:email});
        // console.log(userLogin);

        if(userLogin){
            const isMatch= await bcrypt.compare(password,userLogin.password);

            token=await userLogin.generateAuthToken()
            console.log(token);

            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+ 25892000000),
                httpOnly:true
            });

        if(!isMatch){
            res.status(400).json({error:"Invalid Credentials password"});
        }else{
            res.json({message:'user Signin Successfully'})
        }
    }
        else{
            res.status(400).json({error:"Invalid Credentials"})
        }
    }catch(err){
        console.log(err);
    }
})

module.exports=router;