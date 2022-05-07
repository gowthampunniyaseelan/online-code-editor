const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require("./models/user.model");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const app = express();
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb+srv://gowtham:%40Laraps25@cluster0.jtwam.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
  console.log(`Node.js running on port: ${PORT}`)
})


app.post('/api/signup',async (req,res)=>{
  try{
    const newPassword = await bcrypt.hash(req.body.password,10)
    const user = await User.create({
      name:req.body.name,
      email:req.body.email,
      password:newPassword
    })
    res.json({status:"ok"})
  }catch(err){
    res.json({status:"error",error:"Duplicate email"})
  }
})

app.post('/api/login',async (req,res)=>{
    const user = await User.findOne({
      email:req.body.email
    })
    if(!user){
      return res.json({status:"error",error:"User not found"})
    }
    const isPasswordValid = await bcrypt.compare(req.body.password,user.password)
    if(isPasswordValid){
      const token = jwt.sign({
        email:user.email
      },"secret123")
      return res.json({status:"ok",user:token})
    }else{
      return res.json({status:"Invalid email or password",user:false})
    }
})


if(process.env.NODE_ENV === "production"){
  app.use(express.static("editor/build"))
  const path = require("path")
  app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"editor,build,index.html"))
  })
}