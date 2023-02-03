let express=require("express");
let router=express.Router();
let CustController=require("../controller/custController");

//http://localhost:3000/api/customer/storeCustomerData
//router.post("/storeCustomerData",CustController.storeCustomerInfo);

//http://localhost:3000/api/customer/
router.get("/",CustController.indexPage);

//http://localhost:3000/api/customer/signupPage
router.get("/signupPage",CustController.signupPage);

//http://localhost:3000/api/customer/storeCustomerInfo
router.post("/storeCustomerInfo",CustController.storeCustomerInfo);

//http://localhost:3000/api/customer/signinPage
router.get("/signinPage",CustController.signinPage);
//http://localhost:3000/api/customer/signinUser
router.get("/signinUser",CustController.signinUser);

module.exports=router;