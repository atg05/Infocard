const { json } = require('express');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');  
const jwt = require('jsonwebtoken');

require('../db/conn');
const User=require("../model/userSchema");


router.get('/',(req,res)=>{
    res.send('Server from router.js');
});

router.post('/signup',async (req,res)=>{
    const {name,email,phone,work,password,cpassword}=req.body;
    if(!name|| !email || !phone || !work|| !password || !cpassword){
        return res.status(422).json({error:" Please Fill requierd field"});
        
    }

    try {
        const userExist = await User.findOne({email:email});
        if(userExist){
            return res.status(422).json({error: "Email Already Exist"});
       } else if(password != cpassword){
           return res.status(422).json({error: "Password Not matched"});
       } else {
        const user = new User({name,email,phone,work,password,cpassword});       
        await user.save();
        res.status(201).json({message: "Sucessfully Registered"});
       }  

        
    } catch (error) {
        console.log(error);
        
    }
    

});

router.post('/login',async (req,res)=>{     
    try {
        

        const {email,password} = req.body;
        console.log({email,password});
        if(!email || !password){
            return res.status(400),json({error:"Fill required field"});
            
        }

        const userLogin = await User.findOne({email});

        // Token 
        if(userLogin){
            const isMatch= await bcrypt.compare(password,userLogin.password);
            const token = await userLogin.generateAuthToken();
            console.log(token);
            if(!isMatch){
                return res.json({message:"Invalid Credentials"});
            } else {
                res.json({message: "Sign In"});
            }

        }       
       
    } catch (error) {
        console.log(error);
        
    }
})

module.exports =router;