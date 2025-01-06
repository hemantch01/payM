const express = require("express");
import { Router } from "express";
const mainRouter = require("./routes/index")
const port = 3000;
const app = express();
app.use(express.json());
app.use(cors());


Router.use("/v0", mainRouter);


app.listen(port);