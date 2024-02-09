
const express = require('express');
const userRouter = require('./user')
const app = express();
const PORT = 3000;


const mainRouter = express.Router();

app.use("/user",  userRouter)

 
 module.exports ={  mainRouter}; 