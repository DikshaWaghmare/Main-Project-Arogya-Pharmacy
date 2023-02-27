let express=require("express");
let router=express.Router();
let CustController=require("../controller/custController");
let adminController=require("../controller/adminController");
let authToken=require("../config/authToken")

//http://localhost:3000/api/customer/signUp
//router.get("/findAllCustomers",adminController.findAllCustomers);

//http://localhost:3000/api/customer/signUp
router.post("/signUp",CustController.signUp);

//http://localhost:3000/api/customer/signIn
router.post("/signIn",CustController.signIn);

//http://localhost:3000/api/customer/findCustomerByName/:email
router.get("/findCustomerByEmail/:email",authToken.verifyUserToken,CustController.findCustomerByEmail);

//http://localhost:3000/api/customer/findCustomerByName/:name
router.get("/findCustomerByName/:name",authToken.verifyUserToken,CustController.findCustomerByName);

//http://localhost:3000/api/customer/viewCategoryByName
router.get("/viewCategoryByName/:Cname",CustController.viewCategoryByName);

//http://localhost:3000/api/customer/viewProductByName/:pname
router.get("/viewProductByName/:pname",CustController.viewProductByName);

//http://localhost:3000/api/customer/viewProductByCategoryName
router.get("/viewProductByCategoryName/:categoryName",CustController.viewProductByCategoryName);

//http://localhost:3000/api/customer/updatCustData
//router.patch("/updatCustData",CustController.updatCustData);
module.exports=router;