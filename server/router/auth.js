const express = require('express');
const router = express.Router();

require('../db/conn');
const User=require("../model/userSchema");


router.get('/',(req,res)=>{
    res.send('Server from router.js');
});


router.post('/signup',(req,res)=>{
    const {name,email,phone,work,password,cpassword}=req.body;
    if(!name|| !email || !phone || !work|| !password || !cpassword){
        return res.status(422).json({error:" Please Fill requierd field"});
        
    }

    User.findOne({email:email})
    .then((userExist)=>{
        if(userExist) {
            return res.status(422).json({error: "Email already Exist"});
        }
        // When key and value are same then no need to write name: name , instead write name

        const user = new User({name,email,phone,work,password,cpassword});
        
        user.save().then(()=>{
            res.status(201).json({message: "Registration Succcessful"});

        }).catch((err) => res.status(500).json({error: "Failed to register"}));

    }).catch(err=>{console.log("Error in database")});


});

module.exports =router;