let orderModel=require("../model/orderModel");

// =======================================================================================================================================

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
// =======================================================================================================================================
let viewAllOrder = async (req, res) =>{
    try {
      let result = await orderModel.find({});
      res.send(JSON.stringify(result));
  } catch (error) {
      res.json(error);
  } 
  }
// =======================================================================================================================================

let  viewOrderByCustEmail=async(req,res)=>{
    let custEmail=req.params.email;
    try{
        let result=await orderModel.findOne({email:custEmail});
        if(result==null){
            res.json({"msg":"Record not found!"})
            // console.log("1 "+result);
        }else {
            res.json(result);
            // console.log("2 "+result);
        }
        }
        catch(err){
            res.json({"msg":"Error generated "+err});
        }
}

// =======================================================================================================================================

module.exports = {
    addOrder,viewAllOrder,viewOrderByCustEmail
  };