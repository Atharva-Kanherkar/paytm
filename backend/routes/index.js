
const express = require('express');
const userRouter = require('./user');
const { accountRouter } = require('./accounts');
const app = express();
const PORT = 3000;


const mainRouter = express.Router();

app.use("/user",  userRouter)
app.use("/account", accountRouter);

 
 module.exports ={  mainRouter}; 