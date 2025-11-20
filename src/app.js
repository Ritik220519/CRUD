const express = require("express");
const connectDb = require("./config/database")
const app = express();


// app.use("/check" , (req,res)=>{
//     res.send("Server is up and running");
// })

connectDb().then(()=>{
    console.log("Database connected successfully");
    app.listen(8000 , ()=>{
    console.log("Server is running on port 8000");
})
}).catch((error)=>{
    console.error("Database connection failed", error.message);
})

