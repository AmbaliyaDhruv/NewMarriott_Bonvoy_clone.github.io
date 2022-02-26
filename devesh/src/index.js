// const start=require("./server");
// start();
const express=require('express');
const connect=require("./config/db");
const beachCantroller=require("./cantrollers/beach.controller")


const app=express();
app.use(express.json());
app.use('/beach',beachCantroller)

app.listen(9682, async()=>{
    
    try{
        await connect();
        console.log('Listing on port 9682');
    }
    catch(err){
       console.log(err.message);
    }
});