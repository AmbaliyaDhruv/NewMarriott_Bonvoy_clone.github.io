const mongoose=require("mongoose");

module.exports=()=>{
    mongoose.connect("mongodb+srv://dhruv:dhruv_1112@cluster0.1qaar.mongodb.net/trynewpro?retryWrites=true&w=majority")
}