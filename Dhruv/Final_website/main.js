

const express=require("express");


const mongoose=require("mongoose");

const connect=()=>{
    mongoose.connect("mongodb+srv://dhruv:dhruv_1112@cluster0.1qaar.mongodb.net/trynewpro?retryWrites=true&w=majority")
}

const app=express();

app.use(express.json());

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    username:{type:String,required:true},
    password:{type:String , required:true},
    mobile:{type:Number,required:true},
    description:{type:String,required:true},
})

const User=mongoose.model("users",userSchema)

app.post("/auth/login",async(req,res)=>{
    try {
        const user=await User.create(regiobj)

        res.send(user);
    } catch (error) {
        res.send(error.message)
    }
})


app.listen(5000,async()=>{
    try {
        await connect()
    } catch (error) {
        console.log(error.message)
    }
    console.log("http://localhost:5000")
})