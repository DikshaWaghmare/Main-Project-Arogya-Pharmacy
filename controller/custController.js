let custModel=require("../model/customerModel")
let fs=require("fs");

let indexPage=async(req,res)=>{
  //res.send("Its working!");
  res.sendFile(__dirname+"\\index.html");
}

let signupPage=async(req,res)=>{
 // res.send("Its working!");
  res.sendFile(__dirname+"\\signUp.html");
}

let storeCustomerInfo=async(req,res)=>{
  let customer=req.body;
  //res.send("its working")
  try{
    await custModel.insertMany(customer);
    res.send("Account created Successfully!");
    }catch(err){
        res.send("Error generated:" +err);
    }
};
let signinPage=async(req,res)=>{
  //  res.send("Its working!");
   res.sendFile(__dirname+"\\signIn.html");
 }

let signinUser=async(req,res)=> {
  let email = req.query.email;            // receive email field from form 
  let password = req.query.password;         // recevie password field from form 
  let data = await custModel.find({});
  let result = data.find(d=>d.email==email && d.password==password);
  if(result==undefined){
      res.send("failure try once again")
  }else {
      res.send("successfully login")
  }
}

module.exports={indexPage, signupPage,storeCustomerInfo,signinPage,signinUser};