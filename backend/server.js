const express=require('express')
const cors=require('cors')
const dotenv=require("dotenv").config()
const mongoose=require('mongoose')

const app=express()
const PORT=process.env.PORT||5000
app.use(cors())
app.use(express.json())

app.use('/', require('./routes/user.routes'))

mongoose.connect(process.env.MONGO_LINK_DB)
  .then(() => console.log('MongoDb Connected!'));

app.get("/",(req,res)=>{
    res.send('Server is runing')
})

app.listen(PORT,()=>{
    console.log(`Sercer is runing on ${PORT}`)
})