let express=require("express");
let router=express.Router();
let adminController=require("../controller/adminController");

//http://localhost:3000/api/admin/storeAdminInfo
// router.post("/storeAdminInfo",adminController.storeAdminInfo);

// //http://localhost:3000/api/admin/findAdminInfo
// router.get("/findAdminInfo",adminController.findAdminInfo);

//http://localhost:3000/api/admin/addCategory
router.post("/addCategory",adminController.addCategory);

//http://localhost:3000/api/admin/viewAllCategory
router.get("/viewAllCategory",adminController.viewAllCategory);

//http://localhost:3000/api/admin/addProduct
router.post("/addProduct",adminController.addProduct);

//http://localhost:3000/api/admin/viewAllProducts
router.get("/viewAllProducts",adminController.viewAllProduct);

//http://localhost:3000/api/admin/findAllCustomers 
router.get("/findAllCustomers",adminController.findAllCustomers);

//http://localhost:3000/api/admin/findAllAdmin
//router.get("/findAllAdmin",adminController.findAllAdmin);

module.exports=router;