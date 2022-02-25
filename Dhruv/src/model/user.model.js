const mongoose=require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    username:{type:String,required:true},
    password:{type:String , required:true},
    mobile:{type:Number,required:true},
    description:{type:String,required:true},
},{
    versionKey:false,
    timestamps:true
})

userSchema.pre("save", function (next) {
    if (!this.isModified("password")) return next();
  
    // secret , salt => sdkfhsdkfh , secret + sdkfhsdkfh => dskfgkcskdfgsdkfsdf
    // salt
    // hashing rounds =>
    var hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    return next();
  });
  
  userSchema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

module.exports=mongoose.model("users",userSchema);