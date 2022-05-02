const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require("./models/user.model");
const jwt = require('jsonwebtoken');
const app = express();
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb+srv://gowtham:%40Laraps25@cluster0.jtwam.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

const port = 8000
app.listen(port,()=>{
  console.log(`Node.js running on port: ${port}`)
})


app.post('/api/signup',async (req,res)=>{
  try{
    const user = await User.create({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password
    })
    res.json({status:"ok"})
  }catch(err){
    res.json({status:"error",error:"Duplicate email"})
  }
})

app.post('/api/login',async (req,res)=>{
    const user = await User.findOne({
      email:req.body.email,
      password:req.body.password
    })
    if(user){
      const token = jwt.sign({
        email:user.email
      },"secret123")
      return res.json({status:"ok",user:token})
    }else{
      return res.json({status:"Invalid email or password",user:false})
    }
})