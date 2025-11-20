const express = require("express");
const connectDb = require("./config/database")
const app = express();
const userRouter = require("./route/user")
const cors = require("cors")


app.use(cors({
    origin : "http://localhost:5173",
    credentials : true
}))

app.use(express.json());

app.use("/" , userRouter)

connectDb().then(()=>{
    console.log("Database connected successfully");
    app.listen(8000 , ()=>{
    console.log("Server is running on port 8000");
})
}).catch((error)=>{
    console.error("Database connection failed", error.message);
})

