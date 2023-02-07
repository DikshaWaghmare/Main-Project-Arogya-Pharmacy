let custModel = require("../model/customerModel");
//let adminModel=require("../model/adminModel");
let signUp = async (req, res) => {
  let customer = req.body;
  if ((customer.typeOfUser =="admin")) {
    res.json({"msg":"You can not create Admin Account! Try again..."});
  } 
  else {
    try {
      let result=await custModel.insertMany(customer);
      if(result!=null){
      res.json({"msg":"Account created Successfully!"});
    }else{
      res.json({"msg":"Something went wrong.....Try Again!"});
    }
    } catch (err) {
      res.json({"msg":"Error generated:" + err});
    }
 }
};

let signIn = async (req, res) => {
    let signin= req.body; 
    try{
      let Data= await custModel.findOne({typeOfUser:signin.typeOfUser,email:signin.email,password:signin.password});
      console.log(Data)
      if (Data == null) {
        res.json({"msg":"Can not find customer or admin with this Email, check email and password again! or create new account!"});
      } else if(Data.typeOfUser=="admin"){
        res.json({"msg":"Admin successfully login!"});
      }else{
          res.json({"msg":"Customer successfully login!"});
      }
    }catch(err){
      res.json({"msg":"Error generated:" + err});
    }
  };
// let signIn = async (req, res) => {
//   let signin= req.body; 
//   try{
//     let AdminData= await adminModel.findOne({typeOfUser:signin.typeOfUser,email:signin.email,password:signin.password});
//     let CustData = await custModel.findOne({typeOfUser:signin.typeOfUser,email:signin.email,password:signin.password});
//     console.log(AdminData);
//     console.log(CustData);
    
//     if (CustData == null && AdminData==null) {
//       res.json({"msg":"Can not find customer or admin with this Email, check email and password again! or create new account!"});
//     } else if(AdminData.typeOfUser=="admin"){
//       res.json({"msg":"Admin successfully login!"});
//     }else{
//         res.json({"msg":"Customer successfully login!"});
//     }
//   }catch(err){
//     //console.log(CustData);
//     res.json({"msg":"Error generated:" + err});
//   }
// };

let findAllCustomers = async (req, res) =>{
  try {
    let result = await custModel.find({});
    res.json(result);
} catch (error) {
    res.json(error);
} 
}

let findCustomerById= async(req,res)=>{
//  let result=custId;
//  res.json(result);
    try{
        let result=await custModel.findOne({_id:custId});
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
  signUp,signIn,findAllCustomers,findCustomerById
};
