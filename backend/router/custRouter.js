let express=require("express");
let router=express.Router();
let CustController=require("../controller/custController");

//http://localhost:3000/api/customer/signUp
router.post("/signUp",CustController.signUp);

//http://localhost:3000/api/customer/signIn
router.post("/signIn",CustController.signIn);

module.exports=router;