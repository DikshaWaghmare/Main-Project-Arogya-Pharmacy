//add categories
function addCategory() {
  var _id = document.getElementById("id").value;
  var cname = document.getElementById("cname").value;
  var category = { _id: _id, Cname: cname };
  console.log(category);
  fetch("http://localhost:3000/api/admin/addCategory", {
    method: "post",
    body: JSON.stringify(category),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((result) => {
      document.getElementById("cmsg").innerHTML = result.msg;
      console.log(result);
    })
    .catch((error) => console.log(error));
  reset();
}
// =======================================================================================================================================

//Add Products
function addProduct() {
  var _id = document.getElementById("pid").value;
  var pname = document.getElementById("pname").value;
  var price = document.getElementById("price").value;
  var quantity = document.getElementById("qty").value;
  var cid = document.getElementById("cid").value;
  var cname = document.getElementById("cname").value;
  var products = {
    _id: _id,
    pname: pname,
    price: price,
    quantity: quantity,
    cid: cid,
    categoryName:cname
  };
  console.log(products);
  fetch("http://localhost:3000/api/admin/addProduct", {
    method: "post",
    body: JSON.stringify(products),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((result) => {
      document.getElementById("pmsg").innerHTML = result.msg;
      console.log(result);
    })
    .catch((error) => console.log(error));
  reset();
}
function reset() {
  document.getElementById("pid").value = "";
  document.getElementById("pname").value = "";
  document.getElementById("price").value = "";
  document.getElementById("qty").value = "";
  document.getElementById("cid").value = "";
  document.getElementById("cname").value = "";
}
function cleanpdata(){
  document.getElementById("pmsg").innerHTML ="";
}
// =======================================================================================================================================
//Add salesman
function addSalesman() {
  var _id = document.getElementById("sid").value;
  var name = document.getElementById("sname").value;
  var email = document.getElementById("semail").value;
  var gender;
  var male = document.getElementsByName("gender")[0].checked;
  var female = document.getElementsByName("gender")[1].checked;
  if (male) {
    gender = "male";
  }
  if (female) {
    gender = "female";
  }
  var age = document.getElementById("age").value;
  var mobileNo = document.getElementById("mobileno").value;
  var address = document.getElementById("address").value;
  var salesman = {
    _id: _id,
    name: name,
    email: email,
    gender: gender,
    age: age,
    mobileNo: mobileNo,
    address: address,
  };
  console.log(salesman);
  fetch("http://localhost:3000/api/admin/addSalesman", {
    method: "post",
    body: JSON.stringify(salesman),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((result) => {
      document.getElementById("msg").innerHTML =result.msg;
      console.log(result);
      // alert(result.msg)
    })
    .catch((error) => console.log(error));
  reset();
}
function reset() {
  document.getElementById("sid").value;
  document.getElementById("sname").value;
  document.getElementById("semail").value;
  document.getElementById("gender").value;
  document.getElementById("age").value;
  document.getElementById("mobileno").value;
  document.getElementById("address").value;
}
function cleanSdata(){
  document.getElementById("msg").innerHTML = "";
}
// =======================================================================================================================================
//find all Salesman
function viewAllSalesman() {
  fetch("http://localhost:3000/api/admin/viewAllSalesman", {
    method: "get",
    headers:{
      "authorization":localStorage.getItem("token"),
    }
  })
  .then((res) => res.json())
  .then((result) => {
    console.log(result.msg);
    // console.log(token)
    if (result.msg == null) {
      //document.getElementById("customer").innerHTML =(result);
      // document.getElementById("customer").innerHTML = result.map(obj=>"Id: "+obj._id+", Name: "+obj.name+", Email: "+obj.email+", Password: "+obj.password+", Gender: "+obj.gender+", Age: "+obj.age+", Mobile No.: "+obj.mobileNo+", Address: "+obj.address+", Type Of User: "+obj.typeOfUser).join("<br/>");
      var tableTag = document.createElement("table");
      tableTag.setAttribute("class", "dataTable");
      tableTag.setAttribute("width", "100%");

      var FirstR = document.createElement("tr");
      FirstR.setAttribute("class", "dataTable");
      var firstRfirstC = document.createElement("th");
      // firstRfirstC.setAttribute("class","dataTable")
      var firstRfirstCV = document.createTextNode("Id");
      firstRfirstC.appendChild(firstRfirstCV);
      var firstRsecondC = document.createElement("th");
      var firstRsecondCV = document.createTextNode("Salesman Name");
      firstRsecondC.appendChild(firstRsecondCV);
      var firstRthirdC = document.createElement("th");
      var firstRthirdCV = document.createTextNode("Email");
      firstRthirdC.appendChild(firstRthirdCV);
      var firstRforthC = document.createElement("th");
      var firstRforthCV = document.createTextNode("Password");
      firstRforthC.appendChild(firstRforthCV);
      var firstRfifthC = document.createElement("th");
      var firstRfifthCV = document.createTextNode("Gender");
      firstRfifthC.appendChild(firstRfifthCV);
      var firstRsixC = document.createElement("th");
      var firstRsixCV = document.createTextNode("Age");
      firstRsixC.appendChild(firstRsixCV);
      var firstRsevenC = document.createElement("th");
      var firstRsevenCV = document.createTextNode("Mobile No");
      firstRsevenC.appendChild(firstRsevenCV);
      var firstReigthC = document.createElement("th");
      var firstReigthCV = document.createTextNode("Address");
      firstReigthC.appendChild(firstReigthCV);
      FirstR.appendChild(firstRfirstC);
      FirstR.appendChild(firstRsecondC);
      FirstR.appendChild(firstRthirdC);
      FirstR.appendChild(firstRforthC);
      FirstR.appendChild(firstRfifthC);
      FirstR.appendChild(firstRsixC);
      FirstR.appendChild(firstRsevenC);
      FirstR.appendChild(firstReigthC);

      tableTag.appendChild(FirstR);
      tableTag.setAttribute("border", "1");

      for (i = 0; i < result.length; i++) {
        var secondR = document.createElement("tr");

        var secondRfirstC = document.createElement("td");
        var secondRfirstCV = document.createTextNode(result[i]._id);
        secondRfirstC.appendChild(secondRfirstCV);
        var secondRsecondC = document.createElement("td");
        var secondRsecondCV = document.createTextNode(result[i].name);
        secondRsecondC.appendChild(secondRsecondCV);
        var secondRthirdC = document.createElement("td");
        var secondRthirdCV = document.createTextNode(result[i].email);
        secondRthirdC.appendChild(secondRthirdCV);
        var secondRforthC = document.createElement("td");
        var secondRforthCV = document.createTextNode(result[i].password);
        secondRforthC.appendChild(secondRforthCV);
        var secondRfifthC = document.createElement("td");
        var secondRfifthCV = document.createTextNode(result[i].gender);
        secondRfifthC.appendChild(secondRfifthCV);
        var secondRsixC = document.createElement("td");
        var secondRsixCV = document.createTextNode(result[i].age);
        secondRsixC.appendChild(secondRsixCV);
        var secondRsevenC = document.createElement("td");
        var secondRsevenCV = document.createTextNode(result[i].mobileNo);
        secondRsevenC.appendChild(secondRsevenCV);
        var secondReigthC = document.createElement("td");
        var secondReigthCV = document.createTextNode(result[i].address);
        secondReigthC.appendChild(secondReigthCV);

        secondR.appendChild(secondRfirstC);
        secondR.appendChild(secondRsecondC);
        secondR.appendChild(secondRthirdC);
        secondR.appendChild(secondRforthC);
        secondR.appendChild(secondRfifthC);
        secondR.appendChild(secondRsixC);
        secondR.appendChild(secondRsevenC);
        secondR.appendChild(secondReigthC);

        tableTag.appendChild(secondR);
        tableTag.setAttribute("border", "1");
      }
      document.getElementById("SalesmanDataView").appendChild(tableTag);
    } else if (
      result.msg == "Error generated:JsonWebTokenError: jwt malformed"
    ) {
      document.getElementById("SalesmanDataView").innerHTML =
        "invalid token found! Login again!";
    } else {
      document.getElementById("SalesmanDataView").innerHTML = result.msg;
    }
  })
  .catch((error) => console.log(error));
}
function cleanSalesmanTable(){
  document.getElementById("SalesmanDataView").innerHTML = "";
}
// =======================================================================================================================================

//find all categories
function viewAllCategory() {
  fetch("http://localhost:3000/api/admin/viewAllCategory", {
    method: "get",
  })
    .then((res) => res.json())
    .then((result) => {
      // console.log(result.length);
      // output=document.getElementById("Category");
      // output.innerHTML = result.map(obj=>"Id: "+obj._id+", Name: "+obj.Cname).join("<br/>");
      var tableTag = document.createElement("table");
      tableTag.setAttribute("class", "dataTable");
      tableTag.setAttribute("width", "300px");

      var firstRow = document.createElement("tr");
      firstRow.setAttribute("class", "dataTable");

      var firstRowfirstColumn = document.createElement("th");
      //  firstRowfirstColumn.setAttribute("class", "dataTable");
      var firstRowfirstColumnV = document.createTextNode("Id");
      firstRowfirstColumn.appendChild(firstRowfirstColumnV);

      var firstRowSecondColumn = document.createElement("th");
      // firstRowSecondColumn.setAttribute("class", "tablehead");
      var firstRowSecondColumnV = document.createTextNode("Name");
      firstRowSecondColumn.appendChild(firstRowSecondColumnV);

      firstRow.appendChild(firstRowfirstColumn);
      firstRow.appendChild(firstRowSecondColumn);
      tableTag.appendChild(firstRow);

      for (i = 0; i < result.length; i++) {
        var secondRow = document.createElement("tr");

        var secondRowFirstCol = document.createElement("td");

        var secondRowFirstColV = document.createTextNode(result[i]._id);
        secondRowFirstCol.appendChild(secondRowFirstColV);
        //secondRowFirstCol.setAttribute("border", "2");

        var secondRowSecondCol = document.createElement("td");
        var secondRowSecondColV = document.createTextNode(result[i].Cname);
        secondRowSecondCol.appendChild(secondRowSecondColV);

        secondRow.appendChild(secondRowFirstCol);
        secondRow.appendChild(secondRowSecondCol);

        tableTag.appendChild(secondRow);
      }
      // document.getElementsByTagName("body")[0].appendChild(tableTag);
      document.getElementById("CategoryDataView").appendChild(tableTag);
    })
    .catch((error) => console.log(error));
}
function cleanCategoryTable(){
  document.getElementById("CategoryDataView").innerHTML="";
} 
// =======================================================================================================================================

//find all products
function viewAllProducts() {
  fetch("http://localhost:3000/api/admin/viewAllProducts", {
    method: "get",
  })
    .then((res) => res.json())
    .then((result) => {
      // output=document.getElementById("product");
      // output.innerHTML = result.map(obj=>"Id: "+obj._id+", Name: "+obj.pname+", Price: "+obj.price+", Quantity: "+obj.quantity+", category Id: "+obj.cid).join("<br/>");
      var tableTag = document.createElement("table");
      tableTag.setAttribute("class", "dataTable");
      tableTag.setAttribute("width", "900px");
      
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

      for (i = 0; i < result.length; i++) {
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
      document.getElementById("ProductDataView").appendChild(tableTag);
    })
    .catch((error) => console.log(error));
}
function cleanProductTable(){
  document.getElementById("ProductDataView").innerHTML="";
} 
// =======================================================================================================================================

//find all customers
function findAllData() {
  fetch("http://localhost:3000/api/admin/findAllCustomers", {
    method: "get",
    headers: {
      "Content-type": "application/json",
      authorization: localStorage.getItem("token"),
    },
  })
    .then((res) => res.json())
    .then((result) => {

      console.log(result);
      // console.log(result.msg);
      // console.log(token)
      if (result.msg == null) {
        //document.getElementById("customer").innerHTML =(result);
        // document.getElementById("customer").innerHTML = result.map(obj=>"Id: "+obj._id+", Name: "+obj.name+", Email: "+obj.email+", Password: "+obj.password+", Gender: "+obj.gender+", Age: "+obj.age+", Mobile No.: "+obj.mobileNo+", Address: "+obj.address+", Type Of User: "+obj.typeOfUser).join("<br/>");
        var tableTag = document.createElement("table");
        tableTag.setAttribute("class", "dataTable");
        tableTag.setAttribute("width", "100%");

        var FirstR = document.createElement("tr");
        FirstR.setAttribute("class", "dataTable");
        var firstRfirstC = document.createElement("th");
        // firstRfirstC.setAttribute("class","dataTable")
        var firstRfirstCV = document.createTextNode("Id");
        firstRfirstC.appendChild(firstRfirstCV);
        var firstRsecondC = document.createElement("th");
        var firstRsecondCV = document.createTextNode("Customer Name");
        firstRsecondC.appendChild(firstRsecondCV);
        var firstRthirdC = document.createElement("th");
        var firstRthirdCV = document.createTextNode("Email");
        firstRthirdC.appendChild(firstRthirdCV);
        // var firstRforthC = document.createElement("th");
        // var firstRforthCV = document.createTextNode("Password");
        // firstRforthC.appendChild(firstRforthCV);
        var firstRfifthC = document.createElement("th");
        var firstRfifthCV = document.createTextNode("Gender");
        firstRfifthC.appendChild(firstRfifthCV);
        var firstRsixC = document.createElement("th");
        var firstRsixCV = document.createTextNode("Age");
        firstRsixC.appendChild(firstRsixCV);
        var firstRsevenC = document.createElement("th");
        var firstRsevenCV = document.createTextNode("Mobile No");
        firstRsevenC.appendChild(firstRsevenCV);
        var firstReigthC = document.createElement("th");
        var firstReigthCV = document.createTextNode("Address");
        firstReigthC.appendChild(firstReigthCV);
        var firstRnineC = document.createElement("th");
        var firstRnineCV = document.createTextNode("Type Of User");
        firstRnineC.appendChild(firstRnineCV);

        FirstR.appendChild(firstRfirstC);
        FirstR.appendChild(firstRsecondC);
        FirstR.appendChild(firstRthirdC);
        // FirstR.appendChild(firstRforthC);
        FirstR.appendChild(firstRfifthC);
        FirstR.appendChild(firstRsixC);
        FirstR.appendChild(firstRsevenC);
        FirstR.appendChild(firstReigthC);
        FirstR.appendChild(firstRnineC);

        tableTag.appendChild(FirstR);
        tableTag.setAttribute("border", "1");

        for (i = 0; i < result.length; i++) {
          var secondR = document.createElement("tr");

          var secondRfirstC = document.createElement("td");
          var secondRfirstCV = document.createTextNode(result[i]._id);
          secondRfirstC.appendChild(secondRfirstCV);
          var secondRsecondC = document.createElement("td");
          var secondRsecondCV = document.createTextNode(result[i].name);
          secondRsecondC.appendChild(secondRsecondCV);
          var secondRthirdC = document.createElement("td");
          var secondRthirdCV = document.createTextNode(result[i].email);
          secondRthirdC.appendChild(secondRthirdCV);
          // var secondRforthC = document.createElement("td");
          // var secondRforthCV = document.createTextNode(result[i].password);
          // secondRforthC.appendChild(secondRforthCV);
          var secondRfifthC = document.createElement("td");
          var secondRfifthCV = document.createTextNode(result[i].gender);
          secondRfifthC.appendChild(secondRfifthCV);
          var secondRsixC = document.createElement("td");
          var secondRsixCV = document.createTextNode(result[i].age);
          secondRsixC.appendChild(secondRsixCV);
          var secondRsevenC = document.createElement("td");
          var secondRsevenCV = document.createTextNode(result[i].mobileNo);
          secondRsevenC.appendChild(secondRsevenCV);
          var secondReigthC = document.createElement("td");
          var secondReigthCV = document.createTextNode(result[i].address);
          secondReigthC.appendChild(secondReigthCV);
          var secondRnineC = document.createElement("td");
          var secondRnineCV = document.createTextNode(result[i].typeOfUser);
          secondRnineC.appendChild(secondRnineCV);

          secondR.appendChild(secondRfirstC);
          secondR.appendChild(secondRsecondC);
          secondR.appendChild(secondRthirdC);
          // secondR.appendChild(secondRforthC);
          secondR.appendChild(secondRfifthC);
          secondR.appendChild(secondRsixC);
          secondR.appendChild(secondRsevenC);
          secondR.appendChild(secondReigthC);
          secondR.appendChild(secondRnineC);

          tableTag.appendChild(secondR);
          tableTag.setAttribute("border", "1");
        }
        document.getElementById("DataView").appendChild(tableTag);
      } else if (
        result.msg == "Error generated:JsonWebTokenError: jwt malformed"
      ) {
        document.getElementById("DataView").innerHTML =
          "invalid token found! Login again!";
      } else {
        document.getElementById("DataView").innerHTML = result.msg;
      }
    })
    .catch((error) => console.log(error));
  }
function cleanTableData(){
  document.getElementById("DataView").innerHTML=""
}
// =======================================================================================================================================
//find all orders
function findAllOrders() {
  fetch("http://localhost:3000/api/order/viewAllOrder", {
    method: "get",
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result)
      // output=document.getElementById("orders");
      // output.innerHTML = result.map(obj=>"Category Id: "+obj.categoryId+", Product Id: "+obj.productId+", Customer Id: "+obj.customerId+", Product Quantity: "+obj.productqty+", Amount: "+obj.amount).join("<br/>");
      var tableTag = document.createElement("table");
      tableTag.setAttribute("class", "dataTable");
      tableTag.setAttribute("width", "70%");

      var FirstR = document.createElement("tr");
      FirstR.setAttribute("class", "dataTable");

      var firstRfirstC = document.createElement("th");
      var firstRfirstCV = document.createTextNode("Category Id");
      firstRfirstC.appendChild(firstRfirstCV);
      var firstRsecondC = document.createElement("th");
      var firstRsecondCV = document.createTextNode("Product Id");
      firstRsecondC.appendChild(firstRsecondCV);
      var firstRthirdC = document.createElement("th");
      var firstRthirdCV = document.createTextNode("Customer Email");
      firstRthirdC.appendChild(firstRthirdCV);
      var firstRforthC = document.createElement("th");
      var firstRforthCV = document.createTextNode("Product Quantity");
      firstRforthC.appendChild(firstRforthCV);
      var firstRfifthC = document.createElement("th");
      var firstRfifthCV = document.createTextNode("Order date & time");
      firstRfifthC.appendChild(firstRfifthCV);
      

      FirstR.appendChild(firstRfirstC);
      FirstR.appendChild(firstRsecondC);
      FirstR.appendChild(firstRthirdC);
      FirstR.appendChild(firstRforthC);
      FirstR.appendChild(firstRfifthC);

      tableTag.appendChild(FirstR);
      tableTag.setAttribute("border", "1");

      for (i = 0; i < result.length; i++) {
        var secondR = document.createElement("tr");

        var secondRfirstC = document.createElement("td");
        var secondRfirstCV = document.createTextNode(result[i].categoryId);
        secondRfirstC.appendChild(secondRfirstCV);
        var secondRsecondC = document.createElement("td");
        var secondRsecondCV = document.createTextNode(result[i].productId);
        secondRsecondC.appendChild(secondRsecondCV);
        var secondRthirdC = document.createElement("td");
        var secondRthirdCV = document.createTextNode(result[i].customerEmail);
        secondRthirdC.appendChild(secondRthirdCV);
        var secondRforthC = document.createElement("td");
        var secondRforthCV = document.createTextNode(result[i].productqty);
        secondRforthC.appendChild(secondRforthCV);
        var secondRfifthC = document.createElement("td");
        var secondRfifhCV = document.createTextNode(result[i].dateOfOrder);
        secondRfifthC.appendChild(secondRfifhCV);


        secondR.appendChild(secondRfirstC);
        secondR.appendChild(secondRsecondC);
        secondR.appendChild(secondRthirdC);
        secondR.appendChild(secondRforthC);
        secondR.appendChild(secondRfifthC);

        tableTag.appendChild(secondR);
        tableTag.setAttribute("border", "1");
      }
      document.getElementById("OrderDataView").appendChild(tableTag);
    })
    .catch((error) => console.log(error));
}
function cleanOrderTable(){
  document.getElementById("OrderDataView").innerHTML="";
}
// =======================================================================================================================================
// Salesman
function viewSalesmanByAdmin() {
  var salesmanName=document.getElementById("sname").value;
  console.log(salesmanName);
  fetch("http://localhost:3000/api/admin/viewSalesmanByName/"+salesmanName, {
    method: "get",
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      if (result.msg != null) {
        document.getElementById("SalesmanData").innerHTML = result.msg;
      } else {
        document.getElementById("SalesmanData").innerHTML =
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
          result.address 
      }
})
  
    .catch((error) => console.log(error));
}
function cleanSalesmanData(){
  document.getElementById("SalesmanData").innerHTML="";
}
// ===========================================================================================================================================
function viewOrderByAdmin() {
  var custEmail=document.getElementById("custEmail").value;
   console.log(custEmail);
  fetch("http://localhost:3000/api/order/viewOrderByCustEmail/"+custEmail, {
    method: "get",
  })
    .then((res) => res.json())
    .then((result) => {
     console.log(result);
      if (result.msg != null) {
        document.getElementById("CustOrder").innerHTML = result.msg;
      } else {
        document.getElementById("CustOrder").innerHTML =
        "Customer Email: "+
        result.customerEmail+
          "<br>Category Id: " +
        result.categoryId +
        "<br>Product Id: " +
        result.productId +
        "<br>Product Quantity: " +
        result.productqty +
        "<br>Date Of Order: " +
        result.dateOfOrder;
}
})
  
    .catch((error) => console.log(error));
}
function cleanOrder(){
  document.getElementById("CustOrder").innerHTML="";
}