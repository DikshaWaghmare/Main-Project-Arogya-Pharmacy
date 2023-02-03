let express=require("express");
let dbConfig=require("./config/dbconfig");
let CustRouter=require("./router/custRouter");
let ProductRouter=require("./router/productRouter");
let bodyParser  = require("body-parser");

let app=express();

dbConfig.dbConnection;
// middleware 
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use("/api/customer",CustRouter);//customer router api path
app.use("/api/products",ProductRouter);//Product router api path
app.listen(3000,()=>console.log("Server running on port no. 3000"));