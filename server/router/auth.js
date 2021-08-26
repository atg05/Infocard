const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Server from router.js');
});


router.post('/signup',(req,res)=>{
    const {name,email,phone,password,cpassword}=req.body;
    console.log(name,email,phone,password,cpassword);
    
});

module.exports =router;