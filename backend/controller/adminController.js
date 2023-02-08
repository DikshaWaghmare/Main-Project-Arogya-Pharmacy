let categoryModel=require("../model/categoryModel");
let customerModel = require("../model/customerModel");
let adminModel=require("../model/adminModel")
let productModel=require("../model/productModel")
let addCategory=async(req,res)=>{
    let category = req.body;
    try {
      let result=await categoryModel.insertMany(category);
      if(result!=null){
      res.json({"msg":"catogory added Successfully!"});
    }else{
      res.json({"msg":"Something went wrong.....Try Again!"});
    }
    } catch (err) {
      res.json({"msg":"Error generated:" + err});
    }
 }

 let addProduct=async(req,res)=>{
    let products=req.body;
    try {
        let result=await productModel.insertMany(products);
        if(result!=null){
        res.json({"msg":"Product added Successfully!"});
      }else{
        res.json({"msg":"Something went wrong.....Try Again!"});
      }
      } catch (err) {
        res.json({"msg":"Error generated:" + err});
      }
 }

 let viewAllCategory=async(req,res)=>{
    try {
        let result = await categoryModel.find({});
        let msg=JSON.stringify(result);
        res.send(msg);
    } catch (error) {
        res.json(error);
    }
 }

 let viewAllProduct=async(req,res)=>{
    try {
        let result = await productModel.find({});
        let msg=JSON.stringify(result);
        res.send(msg);
    } catch (error) {
        res.json(error);
    }
 }

 let findAllCustomers = async (req, res) =>{
  try {
    let result = await customerModel.find({});
    //let msg=JSON.stringify(result);
    res.json(result);

} catch (error) {
    res.json(error);
} 
}
let findAllAdmin = async (req, res) =>{
  try {
    let result = await adminModel.find({});
    let msg=JSON.stringify(result);
        res.send(msg);
} catch (error) {
    res.json(error);
} 
}

let  viewOrderByCustId=async(req,res)=>{
  let custId=(req.body.customerId);
  try{
      let result=await orderModel.findOne({customerId:custId});
      if(result==null){
          res.json({"msg":"Record not present with customer id as "+custId})
      }else {
          res.json(result);
      }
      }
      catch(err){
          res.json({"msg":"Error generated "+err});
      }
}


module.exports={addCategory, addProduct, viewAllCategory,viewAllProduct,findAllCustomers,findAllAdmin}