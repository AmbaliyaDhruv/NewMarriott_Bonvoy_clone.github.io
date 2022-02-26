const mongoose=require("mongoose");
const beachSchema=new mongoose.Schema({
    price:{type:Number,required:true},
    hotel_name:{type:String,required:true},
    image_Url:{type:String,required:true},
    featured_family:{type:String,required:true}
},
{
    versionKey:false,
    
});

const Beach=mongoose.model("beach",beachSchema)
module.exports=Beach;
 