const moongoose=require('mongoose');

//DB process
const db = process.env.DATABASE_URL;

moongoose.connect(db,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false

}).then(()=>{
    console.log("Database connected");
}).catch((err) => console.log('No Connection'+err));