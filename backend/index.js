const express = require("express");

const cors = require("cors");
const app = express();
app.use(cors())
app.use(express.json());
const {mainRouter } = require("./routes/index");
const {userRouter}  = require("./routes/user")



app.use("./api/v1", mainRouter);
 
app.listen(3000, ()=>{
    console.log("the server is up and running!")
})