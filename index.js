const express = require("express");
const connection = require("./config/db.js")
const app = express();
const productRouter = require("./routes/products.route.js");
const userRouter = require("./routes/users.route.js")
const PORT = 8005;
app.use(express.json());
app.use("/products",productRouter);
app.use("/users",userRouter);
app.get("/",(req,res)=>{
    res.send("server is running fine");
});
app.listen(PORT,async()=>{
    try {
       await connection
        console.log(`Server is running on port: ${PORT} and connected to database`);
    } catch (error) {
        console.log(`error in connecting database`);
        
    }
   
    
});