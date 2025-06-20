const express = require("express")
const {verifyUser}=require("../utlis/verifyUser")
const {changeUsername}=require("../controllers/User.controller")


const router=express.Router();

router.patch("./editpassword",verifyUser,changeUsername)