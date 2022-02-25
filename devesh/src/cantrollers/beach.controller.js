
const express =require('express');
const Beach=require('../models/beach.model')
const router=express.Router();

//------------post aip--------------
router.post("", async(req,res)=>{
  try{
      const beach=await Beach.create(req.body);
      return res.status(201).send(beach);
  }
  catch(err){
    return res.status(500).send(err.message);
  }
});


//-----------get api-------------
router.get("", async(req,res)=>{
    try{
        const beach=await Beach.find().lean().exec();
        return res.status(201).send(beach);
    }
    catch(err){
      return res.status(500).send(err.message);
    }
})
module.exports=router;