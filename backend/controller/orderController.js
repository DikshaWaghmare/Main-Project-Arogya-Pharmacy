let orderModel=require("../model/orderModel");

let addOrder=async(req,res)=>{
    let order=req.body;
    try {
        let result=await orderModel.insertMany(order);
        if(result!=null){
        res.json({"msg":"Order send Successfully!"});
      }else{
        res.json({"msg":"Something went wrong.....Try Again!"});
      }
      } catch (err) {
        res.json({"msg":"Error generated:" + err});
      }
}

let viewAllOrder = async (req, res) =>{
    try {
      let result = await orderModel.find({});
      res.send(JSON.stringify(result));
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
module.exports = {
    addOrder,viewAllOrder,viewOrderByCustId
  };