let express=require("express");
let router=express.Router();
let orderController=require("../controller/orderController");

//http://localhost:3000/api/order/addOrder
router.post("/addOrder",orderController.addOrder);

//http://localhost:3000/api/order/viewAllOrder
router.get("/viewAllOrder",orderController.viewAllOrder);

//http://localhost:3000/api/order/viewOrderByCustId
router.post("/viewOrderByCustId",orderController.viewOrderByCustId);
module.exports=router;