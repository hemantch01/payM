const express = require("express");
import {z} from "zod";
import { userSch } from "../db";
import { jwt } from "jsonwebtoken";
import {jwt_secret} from "../config";
import { accountSch } from "../dbSchema/db";
const {authMiddleware} = require("../middlewares/middleware");
const Router = express.Router();

const userv= z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    password: z.string(),
})


Router.post("/signup",async (req,res)=>{
   const userDetails = req.body;
    const result = userv.safeParse(userDetails);

    if(!result.success){
    return res.json({msg: "invalid input"});
    }

    const isUserExits = await userSch.findOne(userDetails);
    if(isUserExits._id)
    {
       return res.json({msg: " user already exist go to sign in page"});
    };

    const dbuser = await userSch.create(userDetails);
    const userId = dbuser._id;
    const token = jwt.sign({userId: dbuser._id},jwt_secret);
    res.json({message: " user created successfully" ,token: token});
 
        await accountSch.create({
            userId,
            balance: 1+Math.random()*10000
        })
})

Router.post("/signin", async (req,res)=>{
    const userInput = req.body;
   const isSignInPrev= await userSch.findOne({
        email: userInput.email,
        password: userInput.password
    });
    
    if(!isSignInPrev._id){
       res.json({
        message: "user don't exist! please signup"
       })
    }
    else {const token = jwt.sign({ userId: user._id}, jwt_secret); 
    res.json({ token: token});
    return;
}
})

const UpdateBody = z.object({
    password:z.string().optional(),
    firstName: z.string.optional(),
    lastName: z.string().optional()
})

Router.put("/", authMiddleware, async(req,res)=>{
    const {success} = UpdateBody.safeParse(req.body);
    if(!success){
        res.status(411).json({
            message: 'error while updating information'
        })
    }
    await userSch.updateOne(req.body, {
        id: req.userId
    })
    res.json({
        message: "updated successfully"
    })
})

Router.get("/bulk", async (req, res)=>{
    const filter = req.query.filter || '';
    const users = await userSch.find({
        $or: [{firstName: {"$regex" : filter }},{lastName: {"$regex" : filter }}]
    })

    res.json({
        user: users.map(user =>({
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})