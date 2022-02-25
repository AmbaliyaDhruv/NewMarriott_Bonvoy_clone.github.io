require("dotenv").config();
const jwt = require("jsonwebtoken");

const express=require("express");

// const router=express.Router();

const newToken = (user) => {
    return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
  };

const User=require("../model/user.model");



// router.get("/",async(req,res)=>{
//     try {
         
//      let products=await User.find().lean().exec();
     
//       return res.send(products)

//     } catch (error) {
        
//       return res.send(error.message);
//     }
// })




const Register=async(req,res)=>{
    try {
        
        // we will try to find the user with the email provided
    let user = await User.findOne({ email: req.body.email }).lean().exec();

    // if the user is found then it is an error
    if (user)
      return res.status(400).send({ message: "Please try another email" });

      
    // if user is not found then we will create the user with the email and the password provided
    user = await User.create(req.body);

    // user = new User()
    // user.email = req.body.email
    // user.password = req.body.password
    // user.save();

    // then we will create the token for that user
    const token = newToken(user);
 
    // then return the user and the token

    return res.send({ user, token });
       
    } catch (error) {
       return res.status(500).send(error.message);
    }

}

const login=async(req,res)=>{
    try {
    
      
        const user = await User.findOne({ email: req.body.email });
      
        // If user is not found then return error
        if (!user)
          return res
            .status(400)
            .send({ message: "Please try another email or password" });
    
        // if user is found then we will match the passwords
        const match = user.checkPassword(req.body.password);
    
        if (!match)
          return res
            .status(400)
            .send({ message: "Please try another email or password" });
    
        // then we will create the token for that user
        const token = newToken(user);
    
        // then return the user and the token
       return res.send({ user, token });
    } catch (error) {
       return res.status(500).send(error.message);
    }

}

module.exports={Register,login};