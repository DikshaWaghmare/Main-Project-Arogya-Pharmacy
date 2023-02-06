let custModel = require("../model/customerModel");

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
  let signin = req.body; 
  try{
    let data = await custModel.findOne({typeOfUser:signin.typeOfUser,email:signin.email,password:signin.password});
    if (data == null) {
      res.json({"msg":"failure try once again!"});
    } else if(data.typeOfUser=="admin"){
      res.json({"msg":"Admin successfully login!"});
    }else{
      res.json({"msg":"Customer successfully login!"});
    }
  }catch(err){
    res.json({"msg":"Error generated:" + err});
  }
 
};

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
