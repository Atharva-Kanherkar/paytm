
const express = require('express');
const userRouter = require('./user');
const { monitorEventLoopDelay } = require('perf_hooks');
const { authMiddleware } = require('../middleware');
const app = express();
const PORT = 3000;
const {User, Account} = require("../schema/User");
const { accessSync } = require('fs');

const accountRouter = express.Router();



accountRouter.get("/balance", authMiddleware, async (req,res)=>{
    const userId = req.userId;
    const User =  await User.findById(userId);
    if(!User){
        return res.status(411).json({
            message : "The current user does not exist!"
        })
    }
    const userBalance = await  Account.findOne({
        userId : userId,

    })
 
    res.status(200).json({
        balance : userBalance.balance
    })
})









module.exports = {
    accountRouter
}