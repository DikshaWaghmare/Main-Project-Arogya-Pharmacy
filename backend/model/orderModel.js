let mongoose = require("mongoose");
mongoose.pluralize(null);

let orderSchema=mongoose.Schema({
    _id:Number,
    catgoryId:{type:Number, required:true},
    productyId:{type:Number, required:true},
    customerId:{type:Number, required:true},
    productqty:{type:Number, required:true},
    amount:{type:Number, required:true},
    dateOfOrder:{type:String, required:true},
})
let orderModel=mongoose.model("order",orderSchema);


module.exports=orderModel;

