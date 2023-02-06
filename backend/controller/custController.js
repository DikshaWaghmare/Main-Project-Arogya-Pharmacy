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



module.exports = {
  signUp,signIn
};
