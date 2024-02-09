
const express = require('express');
const app = express();
const PORT = 3000;
const jwt = require('jsonwebtoken');
const jwtSecretKey = require('../config');
const {User, Account} = require('../schema/User')
const z = require('zod');
const  { authMiddleware } = require("../middleware");


const userSchema = z.object({
    username : z.string().email(),
    password : z.string().min(8).max(20),
    firstName: z.string(),
	lastName: z.string(),     
})
const signinBody = z.object({
    username: z.string().email(),
	password: z.string()
})
const updatedBody = z.object({
    username : z.string().optional(),
    firstName : z.string().optional(),
    lastName : z.string().optional()
})


const userRouter = express.Router();


userRouter.post("/signup", async (req,res)=>{
    const userData = req.body;

        const parsedData = await  userSchema.safeParse(userData);
        console.log(parsedData);
        if(!parsedData.success){
            return res.status(411).json({
                message: "Email already taken / Incorrect inputs"
            })
        }
        const existingUser = await User.findOne({
            username: req.body.username
        })
    
        if (existingUser) {
            return res.status(411).json({
                message: "Email already taken/Incorrect inputs"
            })
        }
        const realData = parsedData.data;

const newUser = await User.create({
     email : realData.username,
     password : realData.password,
     firstName : realData.firstName,
     lastName : realData.lastName
})    


const newAccount = await Account.create({
     balance :   1 + Math.random() * 10000,
     userId : newUser._id
})

const userId = newUser._id;
        const token = jwt.sign({userId}, jwtSecretKey);
 
        res.status(200).json(
            {
                message: "User created successfully",
                token: token
            }
        )
});


userRouter.post("/login", async(req,res)=>{
    const data = req.body; 
    const safeData = await signinBody.safeParse(data);
    if (!safeData.success) {
        return res.status(400).json({
            message: "Invalid input data"
        });
    }

    const username = safeData.data.username;
    const password = safeData.data.password;

    try {
        const user = await User.findOne({ username: username });
       if (!user ) {
           return res.status(401).json({
               message: "Invalid username or password"
           });
       }

   
       const token = jwt.sign({ userId: user._id }, jwtSecretKey);
       res.status(200).json({
           token: token
       });
    } catch (error) {
       res.status(500).json({
           errorMessage: "Internal server error"
       });
    }
});

userRouter.put("/", authMiddleware, async  (req,res)=>{
    const data = req.body;
    const success = updatedBody.safeParse(data);
    if(!success){
        return res.status(411).json({message : "Error while getting the response!"})
    }
     await User.updateOne({
        _id : req.userId
     });

     res.json({
        message : "Updated succesfully!"
     })
})

userRouter.get("/bulk", (req,res)=>{
    const filter = req.query.filter || "";
    $or: [{
        firstName: {
            "$regex": filter
        }
    }, {
        lastName: {
            "$regex": filter
        }
    }]
})

res.json({
    user: users.map(user => ({
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        _id: user._id
    }))
})
 
module.exports ={  userRouter}; 