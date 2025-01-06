const express = require("express");
import {z} from "zod";
import { userSch } from "../db";
import { jwt } from "jsonwebtoken";
import {jwt_secret} from "../config";
const app = express();
app.use(express.json());
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
       return res.json({msg: " user already exist"});
    };

    const dbuser = await userSch.create(userDetails)
    const token = jwt.sign({userId: dbuser._id},jwt_secret);
    res.json({message: " user created successfully" ,token: token});
})

