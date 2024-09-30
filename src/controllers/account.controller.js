const account = require("../models/account.model");


const createAccount = async(req, res) => {
    try {
        let userId = req.userId;
        
        let data = {
            ...req.body,
            userId: userId
        };
        const create = await account.create(data);
        res.json({create, message: "Account Created.."})

    } catch (error) {
        res.json({Error: error.message})

    }
};

const findForAllData = async(req, res)=>{
    try{
        let userId = req.userId;
        const findData = await account.find({userId:userId});
        res.json({findData})

    }catch(error){
        res.json({Error: error.message})

    }
};

module.exports = {
    createAccount,
    findForAllData
};