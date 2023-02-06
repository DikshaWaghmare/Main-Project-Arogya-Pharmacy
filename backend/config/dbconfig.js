let mongoose =require("mongoose");
let url="mongodb://127.0.0.1:27017/projectdb";//it contains url details with database name
mongoose.set('strictQuery', true);//for handling err on mongoose

let dbConnection = mongoose.connect(url)
.then(res=>console.log("Database connected!"))
.catch(err=>console.log("error generated: "+err))

module.exports = dbConnection;