let express=require("express");
let router=express.Router();
let adminController=require("../controller/adminController");
let authToken=require("../config/authToken")

//http://localhost:3000/api/admin/findAllCustomers 
router.get("/findAllCustomers",authToken.verifyUserToken,adminController.findAllCustomers);

//http://localhost:3000/api/admin/addCategory
router.post("/addCategory",adminController.addCategory);

//http://localhost:3000/api/admin/viewAllCategory
router.get("/viewAllCategory",adminController.viewAllCategory);

//http://localhost:3000/api/admin/addProduct
router.post("/addProduct",adminController.addProduct);

//http://localhost:3000/api/admin/viewAllProducts
router.get("/viewAllProducts",adminController.viewAllProduct);

//http://localhost:3000/api/admin/addSalesman
router.post("/addSalesman",adminController.addSalesman);

//http://localhost:3000/api/admin/viewAllSalesman
router.get("/viewAllSalesman",adminController.viewAllSalesman);

//http://localhost:3000/api/admin/viewSalesmanByName/name
router.get("/viewSalesmanByName/:name",adminController.viewSalesmanByName);
module.exports=router;