const express = require('express');
const app = express();

const dotenv = require('dotenv');


dotenv.config({path:'./.env'});

//database
require('./db/conn');
//const userSchema = require('./model/userSchema');
const PORT = process.env.PORT;

//middleware

const middleware =(req,res,next) => {
    console.log("Adding middleware with next feature");
    
}

middleware();

app.get('/',(req,res) => {
    res.send('Hello World from server');

});

app.get('/about',(req,res)=>{
    res.send("This is Call for About");
});

app.get('/contact',(req,res)=>{
    res.send("This is call for Contact");
});

app.get('/login',(req,res)=>{
    res.send("This is Call for login");
});

app.get('/register',(req,res)=>{
    res.send("This is call for register");
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

