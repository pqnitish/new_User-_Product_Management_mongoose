const express = require("express");
const ProductModel = require("../models/products.model.js");
const productRouter = express.Router();
productRouter.post("/create-products",async(req,res)=>{
    const {productName,description,brand,price,ratings} = req.body;
    try {
        const product = new ProductModel({
            productName,
            description,
            brand,
            price,
            ratings,
        });
       await product.save();
       res.status(201).json({mesg:`Product created successfully ${product}`})
    } catch (error) {
        res.status(404).json({mesg:`error in creating product ${error}`});
    }
});
productRouter.get("/get-product",async(req,res)=>{
    try {
        const products =await ProductModel.find();
        res.status(200).json({mesg:`products fetched successfully ${products}`})
    } catch (error) {
        res.status(404).json({mesg:`error in fetching products ${error}`});
    }
});
productRouter.patch("/update-product/:id", async(req,res)=>{
    const {id} = req.params;
    try {
        const updatedProduct =  await ProductModel.findByIdAndUpdate({_id:id},req.body);
        res.status(200).json({mesg:`Product updated successfully ${updatedProduct}`});
    } catch (error) {
        res.status(404).json({mesg:`error in updating product ${error}`});
    }
});
productRouter.delete("/delete-product/:id", async(req,res)=>{
    const {id} = req.params;
    try {
        const deletedProduct =  await ProductModel.findByIdAndUpdate({_id:id});
        res.status(200).json({mesg:`Product deleted successfully ${deletedProduct}`});
    } catch (error) {
        res.status(404).json({mesg:`error in deleting product ${error}`});
    }
});
module.exports = productRouter;