let mongoose = require("mongoose");
mongoose.pluralize(null);

let productSchema = mongoose.Schema({
    _id:Number,
    name:{type:String, required:[true,"required product name"]},
   
});
let productModel = mongoose.model("products",productSchema)
module.exports=productModel;