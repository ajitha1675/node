const mongoose = require("mongoose");
const { v4 } = require("uuid");

const productSchema = new mongoose.Schema(
    {
        productName:{
            type:String,
        },
        productId:{
            type:String,
            default: v4,
        },
        price:{
            type:Number,
        },
        expireDate:{
            type:String,
        },
        userId:{
            type:String,
        },
        rating:{
            type:Number,
        },
    }, {timestamps:true}
)

const product = mongoose.model("product", productSchema)

module.exports = product;