const register = require("../models/register.model");
const passwordGenerator =  require("../utils/generatePassword");
const mailSend = require("../utils/sendEmail");
const bcrypt = require("bcrypt");
const {generateToken} = require("../middlewares/authToken");  


const userRegister = async (req,res) =>{
    try{
        let {email, userName} = req.body;
        const checkEmail = await register.findOne({email});
        if(checkEmail){ 
            return res.status(409).json({Message: "Email Already Exists.."})
        }
        let password = passwordGenerator(8);
        let hashPassword = await bcrypt.hash(password, 10);
        let data = {
            ...req.body,
            password: hashPassword,
            created:"success" 
        }
        let createuser = await register.create(data);
        await mailSend(email, userName, password);
        res.json({
            createuser,
            message: "user created"
        });

    }catch (error){
        res.json({
            Error: error
        })
    }
};

const login = async(req, res) =>{
    try{
    let{ email, password} = req.body;
    const checkEmail = await register.findOne({email});
    if(!checkEmail) return res.status(404).json({Message: "Email Not Found.."})
    const checkPassword = await bcrypt.compare(password, checkEmail.password)
    if(!checkPassword) return res.status(404).json({Message:"Incorrect password"})
    let token = generateToken(checkEmail.userId);
    console.log("test", token);
    
        res.json({checkEmail, token, message: "Login successful" })
    }catch(error){
        res.json({error })
    }
}

module.exports = {
    userRegister,
    login 
}