const express = require("express"); 
const userRoute = require("./user")

const app = express();
app.use('/user',userRoute);
