const express=require("express")
const router=express.Router()
const {userSignup,userLogin,getUser}=require("../controllers/user.controller.js")

router.post("/signUp",userSignup)
router.get("/users",getUser)
router.post("/login",userLogin)

module.exports = router;