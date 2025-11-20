const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
        name : {
            type : String,
            required : true
        },
        emailId : {
            type : String,
            unique : true,
            required : true
        },
        employeeRole : {
            type : String,
            required : true,

        },
        address : {
            type : String,
            
        },
        number : {
            type : Number,
            required : true
        },
        gender : {
            type : String,
        }
} , {timestamps : true});

module.exports =  mongoose.model("User" , UserSchema);