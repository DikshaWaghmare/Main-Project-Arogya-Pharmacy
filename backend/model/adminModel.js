let mongoose = require("mongoose");
mongoose.pluralize(null);

let adminSchema = mongoose.Schema({
    name:{type:String, required:[true,"required admin name"]},
    email:{type:String, required:[true,"required admin email"],unique:true},
    password:{type:String, required:[true,"create strong password!",]},
    gender:{type:String, required:true},
    age:{type:Number, required:true},
    mobileNo:{type:Number, required:true},
    address:{type:String},
    typeOfUser:{type:String, required:[true]}
});
let adminModel = mongoose.model("admin",adminSchema)
module.exports=adminModel;