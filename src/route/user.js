const express = require("express");
const User = require("./../model/user");

const userRouter = express.Router();


userRouter.post("/createUser" , async (req,res)=>{
    const {name , emailId , number , gender , employeeRole , address } = req.body;

    try {

        const user = new User({name  , emailId , number , gender , employeeRole , address });

        await user.save();
        res.status(201).send("User created successfully!");
        
    } catch (error) {
        res.status(500).send("faild to create user");
        
    }
})

userRouter.get("/getUsers" , async (req , res)=>{
    try {

        const users = await User.find({});

        res.json({message : "Users fetched successfully" , users});
        
    } catch (error) {
        res.status(500).send("failed to fetch users");
    }
})

module.exports = userRouter;