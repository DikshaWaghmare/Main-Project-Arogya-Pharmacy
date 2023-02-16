let express=require("express");
let cors = require("cors");
let dbConfig=require("./config/dbconfig");
//let authToken=require("./config/authToken");
let CustRouter=require("./router/custRouter");
let adminRouter=require("./router/adminRouter");
let orderRouter=require("./router/orderRouter");
//let bodyParser  = require("body-parser");

let app=express();

dbConfig.dbConnection;
dbConfig.addAdmin();
//authToken.verifyUserToken();
// middleware 
app.use(cors());
app.use(express.json());
app.use("/api/customer",CustRouter);//customer router api path
app.use("/api/admin",adminRouter);//admin router api path
app.use("/api/order",orderRouter);
app.listen(3000,()=>console.log("Server running on port no. 3000"));