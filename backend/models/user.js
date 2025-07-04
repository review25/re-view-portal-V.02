const mongoose = require("mongoose");
const { type } = require("os");

const userSchema=new mongoose.Schema({
   fullName:{type:String},
   email:{type:String,unique:true},
   password:{type:String},
},{timestamps:true})


module.exports=mongoose.model("User",userSchema)