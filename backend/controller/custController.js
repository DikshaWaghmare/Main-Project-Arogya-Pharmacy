let custModel = require("../model/customerModel");
let categoryModel=require("../model/categoryModel");
let productModel=require("../model/productModel");
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
      res.json({"msg":"EmailId must be unique"});
    }
 }
};

let signIn = async (req, res) => {
    let signin= req.body; 
    try{
      let Data= await custModel.findOne({typeOfUser:signin.typeOfUser,email:signin.email,password:signin.password});
      //console.log(Data)
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

let findCustomerByName= async(req,res)=>{
 let custName=req.body.name;
    try{
        let result=await custModel.findOne({name:custName});
        if(result==null){
            res.json({"msg":"Enter Your Name correctly!"})
        }else{
          res.json(result);
        }
        }
        catch(err){
            res.json({"msg":"Error generated "+err});
        }
}

let  viewCategoryByName=async(req,res)=>{
  let cname=(req.body.Cname);
  try{
      let result=await categoryModel.findOne({Cname:cname});
      if(result==null){
          res.json({"msg":"Record not present with Category name as "+cname})
      }else {
          res.json(result);
      }
      }
      catch(err){
          res.json({"msg":"Error generated "+err});
      }
}
let  viewProductByName=async(req,res)=>{
  let pname=(req.body.pname);
  try{
      let result=await productModel.findOne({pname:pname});
      if(result==null){
          res.json({"msg":"Record not present with product name as "+pname})
      }else {
          res.json(result);
      }
      }
      catch(err){
          res.json({"msg":"Error generated "+err});
      }
}

let myFunction=async(req,res)=> {
  // Declare variables
  // var input, filter, table, tr, td, i, txtValue;
  // input = document.getElementById("myInput");
  // filter = input.value.toUpperCase();
  // table = document.getElementById("myTable");
  // tr = table.getElementsByTagName("tr");
  let cname=(req.body.Cname);
  try{
    let result=await categoryModel.findOne({Cname:cname});
    if(result==null){
        res.json({"msg":"Record not present with Category name as "+cname})
    }else {
        res.json(result);
    }
    }
    catch(err){
        res.json({"msg":"Error generated "+err});
    }
  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < cname.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

module.exports = {
  signUp,signIn,findCustomerByName,viewCategoryByName,viewProductByName
};
