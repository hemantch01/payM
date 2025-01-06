const express = require("express");
import { Router } from "express";
const port = 3000;
const app = express();
app.use(express.json());
app.use(cors());
const mainRouter = require("./routes/index");

Router.use("/api/v1", mainRouter);


app.listen(port);