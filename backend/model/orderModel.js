let mongoose = require("mongoose");
mongoose.pluralize(null);

let orderSchema=mongoose.Schema({
    categoryId:{type:Number, required:true},
    productId:{type:Number, required:true},
    customerId:{type:Number, required:true},
    productqty:{type:Number, required:true},
    amount:{type:Number, required:true},
    dateOfOrder:{type:Date, required:true},
})
let orderModel=mongoose.model("order",orderSchema);


module.exports=orderModel;

