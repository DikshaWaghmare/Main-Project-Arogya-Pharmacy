let mongoose = require("mongoose");
mongoose.pluralize(null);

let customerSchema = mongoose.Schema({
    name:{type:String, required:[true,"required customer name"]},
    email:{type:String, required:[true,"required customer email"]},
    password:{type:String, required:[true,"create strong password!"]},
    typeOfUser:{type:String, required:[true]},
    mobileNo:{type:Number, required:true}
});
let customerModel = mongoose.model("customer",customerSchema)
module.exports=customerModel;