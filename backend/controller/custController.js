let custModel = require("../model/customerModel");
let categoryModel = require("../model/categoryModel");
let productModel = require("../model/productModel");
let jwt = require("jsonwebtoken");
let bcrypt = require("bcrypt");

// =======================================================================================================================================
//convert password in hash
let convertPasswordInHash = async (password) => {
  let salt = await bcrypt.genSalt(); // by default round 10
  let hashPassword = await bcrypt.hash(password, salt); // it will convert password in hash
  return hashPassword;
};

//compare hashpassword and password
let comparePasswordWithHash = async (password, hashPassword) => {
  let myHashConvertPassword = await bcrypt.compare(password, hashPassword);
  return myHashConvertPassword;
};

// =======================================================================================================================================

let signUp = async (req, res) => {
  let customer = req.body;
  //let emaildata = await custModel.find({ email: customer.email });
  if (customer.typeOfUser == "admin") {
    res.json({ msg: "You can not create Admin Account! Try again..." });
  } 
  // else if (emaildata != null) {
  //   res.json({ msg: "Email must be unique! Try again..." });
  // } 
  else {
    try {
      
      customer.password = await convertPasswordInHash(customer.password);
      let result = await custModel.insertMany(customer);
      if (result != null) {
        res.json({ msg: "Account created Successfully!" });
      } else {
        res.json({ msg: "Something went wrong.....Try Again!" });
      }
    } catch (err) {
      res.json({ msg: "Fill All the Field: " + err });
    }
  }
};
// =======================================================================================================================================
let signIn = async (req, res) => {
  let signin = req.body;
  try {
    let findUser = await custModel.findOne({ email: signin.email }); //find cust with email
    // if(findUser!=null){
    // let result = await comparePasswordWithHash(signin.password,findUser.password);//compare user  current enter password and hashpassword  and return true if same otherwise return false
    // // console.log(result);
    // if (result != true) {
    //   res.json({
    //     msg: "Can not find customer or admin with this Email, check email and password again! or create new account!",
    //   });
    // } else if (findUser.typeOfUser == "admin") {
    //   res.json({ msg: "Admin successfully login!" });
    // } else{
    //   res.json({ msg: "Customer successfully login!" });
    // }
    // }
    // else{
    //   res.json({ msg: "Fill all field correctly!" });
    // }
    if (findUser != null) {
      let result = await comparePasswordWithHash(
        signin.password,
        findUser.password
      );
      if (result) {
        //console.log(findUser);
        // we will write the code
        let payload = { emailid: findUser.emailid };
        let tokenValue = jwt.sign(payload, "secretKey");
        if (findUser.typeOfUser == "admin" && signin.typeOfUser == "admin") {
          res.json({
            msg: "Admin successfully login!",
            token: tokenValue,
          });
        } else if (
          findUser.typeOfUser == "customer" &&
          signin.typeOfUser == "customer"
        ) {
          res.json({
            msg: "Customer successfully login!",
            token: tokenValue,
          });
        } else {
          res.json({ msg: "type of user may be wrong" });
        }
      } else {
        res.json({ msg: "Password is wrong" });
      }
    } else {
      res.json({ msg: "EmailId is wrong" });
    }
  } catch (err) {
    res.json({ msg: "Error generated:" + err });
  }
};

// =======================================================================================================================================
let findCustomerByName = async (req, res) => {
  let custName = req.body.name;
  try {
    let result = await custModel.findOne({ name: custName });
    if (result == null) {
      res.json({ msg: "Enter Your Name correctly!" });
    } else {
      res.json(result);
    }
  } catch (err) {
    res.json({ msg: "Error generated " + err });
  }
};

// =======================================================================================================================================
let viewCategoryByName = async (req, res) => {
  let cname = req.body.Cname;
  try {
    let result = await categoryModel.findOne({ Cname: cname });
    if (result == null) {
      res.json({ msg: "Record not Found!" });
    } else {
      res.json(result);
    }
  } catch (err) {
    res.json({ msg: "Error generated " + err });
  }
};

// =======================================================================================================================================
let viewProductByName = async (req, res) => {
  let pname = req.body.pname;
  try {
    let result = await productModel.findOne({ pname: pname });
    if (result == null) {
      res.json({ msg: "Record not found!" });
    } else {
      res.json(result);
    }
  } catch (err) {
    res.json({ msg: "Error generated " + err });
  }
};

// =======================================================================================================================================

module.exports = {
  convertPasswordInHash,
  comparePasswordWithHash,
  signUp,
  signIn,
  findCustomerByName,
  viewCategoryByName,
  viewProductByName,
};
