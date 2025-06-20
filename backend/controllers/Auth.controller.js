const User = require("../models/User.model");
const bcrypt = require("bcryptjs")
const jwt=require("jsonwebtoken")


const signup = async(req, res) => {
    try{
       const {username,email, password} = req.body;



       const existingUserWithUsername = await User.findOne({username})

       if(existingUserWithUsername){
        return res.status(400).json({message : "Username is already taken"})
       }

       const existingUserWithEmail = await User.findOne({email})

       if(existingUserWithEmail){
        return res.status(400).json({message : "A user is already registered with this email"})
       }

      

       const hashedPassword = await bcrypt.hash(password, 10)

       

       const newUser = new User({
        username,
        email,
        password : hashedPassword
       })

      

       await newUser.save()

       return res.status(201).json({message : "User created successfully!", newUser})

    }catch(err){
        console.log("Error signing up", err.message);
        return res.status(500).json({message : "Internal server error!", error : err.message});
    }
}


const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found with this email, kindly create an account" });
    }

    const validPassword = await bcrypt.compare(password, existingUser.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Passwords don't match" });
    }

    const tokenData = {
      id: existingUser._id,
      email: existingUser.email
    };

    const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h"
    });

    res.cookie("access_token", token, {
      httpOnly: true,
      sameSite: "Lax"
    });

    return res.status(200).json({
      message: "User logged in successfully",
      token,
      user: {
        id: existingUser._id,
        username: existingUser.username,
        email: existingUser.email
      }
    });

  } catch (err) {
    console.error("Error signing in:", err);
    return res.status(500).json({ message: "Internal server error", error: err.message });
  }
};



module.exports = { signup ,signin};

