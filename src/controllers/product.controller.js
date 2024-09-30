const product = require("../models/product.model");

const createProduct  = async(req,res) =>{
    try {
        let userId =  req.userId
        let data = {
            ...req.body
        }
        const savedProduct = await product.create(data);
        res.json({savedProduct})
    } catch (error) {
         res.json(error.message)
    }
}

const getProduct = async(req,res)=>{
    try {
        let userId = req.userId

        const getData = await product.find({userId})
        if(!getData || getData.length === 0){
           return res.status(404).json({message:"No Data Found"})
        }
        res.json(getData)
    } catch (error) {
        res.json(error.message)
    }
}

const getOneProduct = async(req,res)=>{
    try {
        let {productId} = req.query

        const getData = await product.findOne({productId})
        if(!getData){
            return res.status(404).json({message:"Product Id Not Found"})
        }
        res.json(getData)
    } catch (error) {
        res.json(error.message)
    }
}

module.exports = {
    createProduct,
    getProduct,
    getOneProduct
}