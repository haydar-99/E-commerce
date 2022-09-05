//npm start --- start nodemon
const express = require("express");
const { default: mongoose } = require("mongoose");
const env = require('dotenv').config()
const app = express()
const product = require("./models/products")
// const router = require("./router/router")
const  bodyParser = require('body-parser');
const productModel = require("./models/products");
var cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }))
// app.use("/router", router)
app.use(cors());

app.get("/", async (req,res) =>{
    try {
        const pr = await productModel.find();
        console.log(pr)
        res.json(pr)
        
    } catch (error) {
        console.log(error)
        res.json(error)

    }
   
})
app.post("/", async (req,res)=>{

    const prod = new product(req.body)

    try {
            await prod.save()
            res.status(201).json(prod);          
   
        } catch (error) {
            res.status(409).json({message: error.message});
    }

   
})


mongoose
.connect(process.env.DATABASE_URL,{dbName:"store"})
.then(()=>{console.log("connected to the database")
app.listen(5000, ()=>{console.log("running on port 5000")})
})
.catch(err=>{console.log(err.message)}) 