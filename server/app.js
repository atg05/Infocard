const express = require('express');
const app = express();
const moongoose=require('mongoose');
const dotenv = require('dotenv');


dotenv.config({path:'./.env'});
//database
const db = process.env.DATABASE_URL;
moongoose.connect(db,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false

}).then(()=>{
    console.log("Database connected");
}).catch((err) => console.log('No Connection'+err));




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

app.listen(8000,()=>{
    console.log('Server is running on port 8000');
})

