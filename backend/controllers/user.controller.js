const User=require("../models/user")
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const { default: mongoose } = require("mongoose")

const userSignup=async(req,res)=>{
    const {fullName,email,password}=req.body
    try{
         if(!email || !password ){
        return res.status(400).json({message: "Email and password is required"})
    }
    if(!fullName){
        return res.status(400).json({message: "Full Name is required"})
    }
    let user=await User.findOne({email})
    if(user){
        return res.status(400).json({error: "Email is already exist"})
    }
    const hashedpass=await bcrypt.hash(password,10)
    const newUser=await User.create({
        fullName,email,password:hashedpass
    })
    const token=jwt.sign({email,id:newUser._id},process.env.SECRET_KEY)
    return res.status(200).json({user:newUser,token})
    }catch(err){
        return res.status(500).json({err})
    }
   

}

const userLogin=async(req,res)=>{
    const {email,password}=req.body
    try{
        if(!email||!password){
         return res.status(400).json({message: "Email and password is required"})   
        }
        let user=await User.findOne({email})
       if (user && await bcrypt.compare(password, user.password)) {
        let token = jwt.sign({ email, id: user._id }, process.env.SECRET_KEY)
        return res.status(200).json({ token, user })
    }
    else {
        return res.status(400).json({ error: "Invaild credientials" })
    }

    }
    catch(err){
    return res.json({err})
}
}

const getUser=async(req,res)=>{
    const user=await User.find()
   try {
    const users = await User.find(); // gets all users
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }

}

module.exports={userSignup,userLogin,getUser}
 