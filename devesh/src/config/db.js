const mongoose =require('mongoose');
const connect =()=>{
    return mongoose.connect("mongodb+srv://devesh:devesh@cluster0.1854r.mongodb.net/test")
    // return mongoose.connect("mongodb+srv://Nikhil874:Nikil874@cluster0.3l0um.mongodb.net/marriottbonvoy")

}

module.exports=connect;