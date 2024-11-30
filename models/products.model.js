const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    productName:{
        type: String,
        required: true,
    },
    description:{
        type:String,
        required : true,    
    },
    brand:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    ratings:{
        type:Number,
        required:false
    }
});
const ProductModel = mongoose.model("Product",productSchema);
module.exports = ProductModel;