const mongoose  =  require("mongoose");
const { v4 } = require("uuid");

const registerSchema = new mongoose.Schema({
    _id:{
        type:String,
        default:v4
    },  
    username: {
        type: String,
    },
    email:{
        type:String,
        unique: true,
        trim: true
    },
    age: {
        type: Number,
        required: true
    },
    mobilenumber: {
        type: Number,
        default: "Test"
    },
    password: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        default: v4
    }
  
    
}, {timestamps: true}


);

const register = mongoose.model("register", registerSchema);

module.exports = register;
 
