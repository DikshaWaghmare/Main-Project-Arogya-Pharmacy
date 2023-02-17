let express=require("express");
let router=express.Router();
let CustController=require("../controller/custController");
let adminController=require("../controller/adminController");

//http://localhost:3000/api/customer/signUp
//router.get("/findAllCustomers",adminController.findAllCustomers);

//http://localhost:3000/api/customer/signUp
router.post("/signUp",CustController.signUp);

//http://localhost:3000/api/customer/signIn
router.post("/signIn",CustController.signIn);

//http://localhost:3000/api/customer/findCustomerByName 
router.post("/findCustomerByName",CustController.findCustomerByName);

//http://localhost:3000/api/customer/viewCategoryByName
router.post("/viewCategoryByName",CustController.viewCategoryByName);

//http://localhost:3000/api/customer/viewProductByName
router.post("/viewProductByName",CustController.viewProductByName);

//http://localhost:3000/api/customer/updatCustData
//router.patch("/updatCustData",CustController.updatCustData);
module.exports=router;