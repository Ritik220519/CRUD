const mongoose = require("mongoose");


async function connectDB(){

   await mongoose.connect("mongodb+srv://rtksri123:Ritik22@cluster-all.vqekfl0.mongodb.net/UserDB")
}

module.exports = connectDB;