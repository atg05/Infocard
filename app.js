const express = require('express');
const app = express();

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

