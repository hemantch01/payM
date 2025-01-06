const express = require("express"); 
const userRoute = require("./user")

const Router = express.Router();
Router.use('/user',userRoute);
Router.use("/user/account",accountRouter)
