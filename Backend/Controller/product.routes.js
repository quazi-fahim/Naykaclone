const express=require("express");
const router=express.Router();
const Product=require("../Models/product.schema");
const auth=require("../Middleware/auth");
const checkAccess=require("../Middleware/Checkacess");
const Roles=require("../config/roles");
const Category=require("../Models/category");
const Brand=require("../Models/brand")

//get all product for all 
router.get("/",async(req,res)=>{
    try{
        const product=await Product.find();
        res.status(201).json(product)
    }
    catch(error){
        res.status(500).json({ message: error.message })
    }
});

///create product 

router.post("/create",auth,checkAccess(Roles.Admin||Roles.Seller),async(req,res)=>{
    try{
        const { name, category, brand, price, rating, image, description, howtouse } = req.body;
        const categoryExists = await Category.findById(category);
        if (!categoryExists) {
          return res.status(400).json({ error: "Invalid category ID" });
        }
        const brandExists = await Brand.findById(brand);
        if (!brandExists) {
          return res.status(400).json({ error: "Invalid brand ID" });
        }
//create
const product=new Product({
    name,category,brand,price,rating,image,description,howtouse
});
await product.save();
res.status(201).json({message:"Product Created Scuccessfully"})
    
    }
    catch(error){
        console.error(error);
      res.status(500).json({ error: "Internal server error" }); 
    }
});

router.patch("/update/")