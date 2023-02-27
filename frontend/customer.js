function greeting(){
  var userDetails=localStorage.getItem("userName");
  var cname=userDetails.replace(/"/g,'')
  console.log(cname)
  fetch("http://localhost:3000/api/customer/findCustomerByName/"+cname, {
    method: "get",
    headers:{
      "authorization":localStorage.getItem("token"),
    }
})
.then((res) => res.json())
.then((result) => {
  console.log(result)
  var today = new Date();
  let hoursMin = today.getHours() + '.' + today.getMinutes();
  console.log(hoursMin);
  if(hoursMin<=11.59 ){
  var hTag = document.createElement("h3");    
  var hTagContent = document.createTextNode("Good Morning🌄 "+result.name);  
  }else if(hoursMin>=12.00 && hoursMin<=15.59){
    var hTag = document.createElement("h3");  
    var hTagContent = document.createTextNode("Good Afternoon🕑 "+result.name);  
  }else if(hoursMin>=16.00 && hoursMin<=20.59){
    var hTag = document.createElement("h3");     
    var hTagContent = document.createTextNode("Good Evening🌆 "+result.name); 
  }else{
    var hTag = document.createElement("h3");   
    var hTagContent = document.createTextNode("Good Night🌃 "+result.name); 
  }
  hTag.appendChild(hTagContent);  
  document.getElementById("cheading").appendChild(hTag);
})
.catch((error) => console.log(error));
}

// // =======================================================================================================================================

//find customer by Name
function viewCustomerByEmailByCust() {
   var cemail=localStorage.getItem("userEmail");
  fetch("http://localhost:3000/api/customer/findCustomerByEmail/"+cemail, {
    method: "get",
    headers:{
      "authorization":localStorage.getItem("token"),
    }
  })
    .then((res) => res.json())
    .then((result) => {
      if (result.msg != null) {
        output = document.getElementById("cDetails");
        output.innerHTML = result.msg;
      } else {
        output = document.getElementById("cDetails");
        output.innerHTML =
          "Id: " +
          result._id+
          "<br>Name:" +
          result.name +
          "<br>Email: " +
          result.email +
          // "<br>Password: " +
          // result.password +
          "<br>Gender: " +
          result.gender +
          "<br>Age: " +
          result.age +
          "<br>Mobile No.: " +
          result.mobileNo +
          "<br>Address: " +
          result.address +
          "<br>TypeOfUser: " +
          result.typeOfUser+"<br>";
        var btn=document.createElement("button");
        var btnV=document.createTextNode("❌");
        btn.appendChild(btnV);
        // btn.setAttribute(onclick="cleanCustData()");
        document.getElementById("cDetails").appendChild(btn);
      }
    })
    .catch((error) => console.log(error));
}

function cleanCustData(){
  document.getElementById("cDetails").innerHTML="";
}
// // =======================================================================================================================================

function viewCustomerByNameByAdmin() {
   var cname = document.getElementById("cname").value;
  
  fetch("http://localhost:3000/api/customer/findCustomerByName/"+cname, {
    method: "get",
    headers:{
      "authorization":localStorage.getItem("token"),
    }
  })
    .then((res) => res.json())
    .then((result) => {
      if (result.msg != null) {
        output = document.getElementById("cDetails");
        output.innerHTML = result.msg;
        // var close=document.createElement("button");
        // var closeV=document.createTextNode("Close");
        // close.appendChild(closeV);
        // document.getElementById("cDetails").appendChild(close);
      } else {
        output = document.getElementById("cDetails");
        output.innerHTML =
          "Id: " +
          result._id+
          "<br>Name:" +
          result.name +
          "<br>Email: " +
          result.email +
          "<br>Password: " +
          result.password +
          "<br>Gender: " +
          result.gender +
          "<br>Age: " +
          result.age +
          "<br>Mobile No.: " +
          result.mobileNo +
          "<br>Address: " +
          result.address +
          "<br>TypeOfUser: " +
          result.typeOfUser;
      }
    })
    .catch((error) => console.log(error));
}
// function reset(){
// alert("welcome")
// }

// // function updatCustData(){
// //   console.log("hiiii")

// // }
// // =======================================================================================================================================

// //find category by name

function viewCategoryByName() {
  var cname=document.getElementById("categoryName").value;
   //console.log(cname)
  //  var Category = { Cname: cname };
  fetch("http://localhost:3000/api/customer/viewCategoryByName/"+cname, {
    method: "get",
  })
    .then((res) => res.json())
    .then((result) => {
      if (result.msg != null) {
        output = document.getElementById("MyCategory");
        output.innerHTML = result.msg;

      } else {
        output = document.getElementById("MyCategory");
        output.innerHTML ="Id: " + result._id + "<br>Category Name:" + result.Cname;
      }
    })
    .catch((error) => console.log(error));
}
function cleanCategory(){
  document.getElementById("MyCategory").innerHTML="";
  document.getElementById("categoryName").value="";
} 
// // =======================================================================================================================================

// //Find product by name
function viewProductByName() {
  var pname = document.getElementById("productName").value;
  
  fetch("http://localhost:3000/api/customer/viewProductByName/"+pname, {
    method: "get"
  })
    .then((res) => res.json())
    .then((result) => {
      if (result.msg != null) {
        document.getElementById("product").innerHTML = result.msg;
      } else {
        document.getElementById("product").innerHTML =
          "Id: " +
          result._id +
          "<br>Product Name: " +
          result.pname +
          "<br>Product price: " +
          result.price +
          "<br>Product Quantity: " +
          result.quantity +
          "<br>Category Id: " +
          result.cid+
          "<br>Category Name: " +
          result.categoryName;
      }
    })
    .catch((error) => console.log(error));
}
function cleanProduct(){
  document.getElementById("productName").value="";
  document.getElementById("product").innerHTML ="";
}
// // =======================================================================================================================================
//Find product by category name
function viewProductByCategoryName1() {
  var cname=document.getElementById("coldandcough").innerText;
  localStorage.setItem("cname",cname);
}
function viewProductByCategoryName() {
//  var cname=document.getElementById("coldandcough").innerText;
var n= localStorage.getItem("cname")
// var n="Skin Care"
console.log(n)
// var cname="Cold and Cough";
  fetch("http://localhost:3000/api/customer/viewProductByCategoryName/"+n, {
    method: "get",
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result.length)
      var tableTag = document.createElement("table");
      tableTag.setAttribute("class", "dataTable");
      tableTag.setAttribute("width", "700px");
      
      var firstRow = document.createElement("tr");
      firstRow.setAttribute("class", "dataTable");

      var firstRowfirstColumn = document.createElement("th");
      //firstRowfirstColumn.setAttribute("class", "dataTable");
      var firstRowfirstColumnV = document.createTextNode("Id");
      firstRowfirstColumn.appendChild(firstRowfirstColumnV);

      var firstRowSecondColumn = document.createElement("th");
      //firstRowSecondColumn.setAttribute("class", "dataTable");
      var firstRowSecondColumnV = document.createTextNode("Name");
      firstRowSecondColumn.appendChild(firstRowSecondColumnV);

      var firstRowThirdColumn = document.createElement("th");
      //firstRowThirdColumn.setAttribute("class", "dataTable");
      var firstRowThirdColumnV = document.createTextNode("Price");
      firstRowThirdColumn.appendChild(firstRowThirdColumnV);

      var firstRowForthColumn = document.createElement("th");
      //firstRowForthColumn.setAttribute("class", "dataTable");
      var firstRowForthColumnV = document.createTextNode("Quantity");
      firstRowForthColumn.appendChild(firstRowForthColumnV);

      var firstRowFifthColumn = document.createElement("th");
      //firstRowFifthColumn.setAttribute("class", "dataTable");
      var firstRowFifthColumnV = document.createTextNode("Category Id");
      firstRowFifthColumn.appendChild(firstRowFifthColumnV);

      var firstRowSixthColumn = document.createElement("th");
      //firstRowFifthColumn.setAttribute("class", "dataTable");
      var firstRowSixthColumnV = document.createTextNode("Category Name");
      firstRowSixthColumn.appendChild(firstRowSixthColumnV);

      firstRow.appendChild(firstRowfirstColumn);
      firstRow.appendChild(firstRowSecondColumn);
      firstRow.appendChild(firstRowThirdColumn);
      firstRow.appendChild(firstRowForthColumn);
      firstRow.appendChild(firstRowFifthColumn);
      firstRow.appendChild(firstRowSixthColumn);

      tableTag.appendChild(firstRow);

      for (i = 0;i<result.length; i++) {
        var secondRow = document.createElement("tr");

        var secondRowFirstCol = document.createElement("td");
        var secondRowFirstColV = document.createTextNode(result[i]._id);
        secondRowFirstCol.appendChild(secondRowFirstColV);
        //secondRowFirstCol.setAttribute("border","2");

        var secondRowSecondCol = document.createElement("td");
        var secondRowSecondColV = document.createTextNode(result[i].pname);
        secondRowSecondCol.appendChild(secondRowSecondColV);

        var secondRowThirdCol = document.createElement("td");
        var secondRowThirdColV = document.createTextNode(result[i].price);
        secondRowThirdCol.appendChild(secondRowThirdColV);

        var secondRowForthCol = document.createElement("td");
        var secondRowForthColV = document.createTextNode(result[i].quantity);
        secondRowForthCol.appendChild(secondRowForthColV);

        var secondRowFifthCol = document.createElement("td");
        var secondRowFifthColV = document.createTextNode(result[i].cid);
        secondRowFifthCol.appendChild(secondRowFifthColV);

        var secondRowSixthCol = document.createElement("td");
        var secondRowSixthColV = document.createTextNode(result[i].categoryName);
        secondRowSixthCol.appendChild(secondRowSixthColV);

        secondRow.appendChild(secondRowFirstCol);
        secondRow.appendChild(secondRowSecondCol);
        secondRow.appendChild(secondRowThirdCol);
        secondRow.appendChild(secondRowForthCol);
        secondRow.appendChild(secondRowFifthCol);
        secondRow.appendChild(secondRowSixthCol);

        tableTag.appendChild(secondRow);
      }
      // document.getElementsByTagName("body")[0].appendChild(tableTag);
      document.getElementById("DataView").appendChild(tableTag);
    })
    .catch((error) => console.log(error));
  }
// =======================================================================================================================================

//order function
function order() {
  var categoryId = document.getElementById("cid").value;
  var productId = document.getElementById("pid").value;
  var customerId = document.getElementById("customerId").value;
  var productqty = document.getElementById("qty").value;
  var dateOfOrder = new Date();
  var order = {
    categoryId: categoryId,
    productId: productId,
    customerId: customerId,
    productqty: productqty,
    dateOfOrder: dateOfOrder,
  };
  console.log(order);
  fetch("http://localhost:3000/api/order/addOrder", {
    method: "post",
    body: JSON.stringify(order),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((result) => {
      document.getElementById("order").innerHTML = result.msg;
      console.log(result);
    })
    .catch((error) => console.log(error));
  reset();
}
function reset() {
  categoryId = document.getElementById("cid").value = "";
  productId = document.getElementById("pid").value = "";
  customerId = document.getElementById("customerId").value = "";
  productqty = document.getElementById("qty").value = "";
  amount = document.getElementById("amount").value = "";
  dateOfOrder = document.getElementById("doforder").value = "";
}
// =======================================================================================================================================

//view your own order
function viewOrderByCust() {
  var userId=localStorage.getItem("userId");
   var custId=userId.replace(/"/g,'')
  console.log(custId);
  fetch("http://localhost:3000/api/order/viewOrderByCustId/"+custId, {
    method: "get",
  })
    .then((res) => res.json())
    .then((result) => {
      // console.log(result);
      if (result.msg != null) {
        document.getElementById("MyOrder").innerHTML = result.msg;
      } else {
        document.getElementById("MyOrder").innerHTML =result
          // "Category Id: " +
          // result.categoryId +
          // "<br>Product Id: " +
          // result.productId +
          // "<br>Customer Id: " +
          // result.customerId +
          // "<br>Product Quantity: " +
          // result.productqty +
          // "<br>Date Of Order: " +
          // result.dateOfOrder;
      }
    })
    .catch((error) => console.log(error));
}
// =======================================================================================================================================
function viewOrderByAdmin() {
  var custId=document.getElementById("custId").value;
  // console.log(custId);
  fetch("http://localhost:3000/api/order/viewOrderByCustId/"+custId, {
    method: "get",
  })
    .then((res) => res.json())
    .then((result) => {
      // console.log(result);
      if (result.msg != null) {
        document.getElementById("MyOrder").innerHTML = result.msg;
      } else {
        document.getElementById("MyOrder").innerHTML =
        result.map(obj=>"Category Id: "+obj.categoryId+", Product Id: "+obj.productId+", Customer Id: "+obj.customerId+", Product Quantity: "+obj.productqty).join("<br/>");
          // "Category Id: " +
          // result.categoryId +
          // "<br>Product Id: " +
          // result.productId +
          // "<br>Customer Id: " +
          // result.customerId +
          // "<br>Product Quantity: " +
          // result.productqty +
          // "<br>Date Of Order: " +
          // result.dateOfOrder;
      }
    })
    .catch((error) => console.log(error));
}
// =======================================================================================================================================
