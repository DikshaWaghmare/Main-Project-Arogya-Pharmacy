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

//Add Products
function addProduct() {
  var _id = document.getElementById("pid").value;
  var pname = document.getElementById("pname").value;
  var price = document.getElementById("price").value;
  var quantity = document.getElementById("qty").value;
  var cid = document.getElementById("cid").value;
  var products = {
    _id: _id,
    pname: pname,
    price: price,
    quantity: quantity,
    cid: cid,
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
  document.getElementById("id").value = "";
  document.getElementById("cname").value = "";
  document.getElementById("pid").value = "";
  document.getElementById("pname").value = "";
  document.getElementById("price").value = "";
  document.getElementById("qty").value = "";
  document.getElementById("cid").value = "";
}

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
      tableTag.setAttribute("class", "categoryTable");
      tableTag.setAttribute("width", "300px");

      var firstRow = document.createElement("tr");
      firstRow.setAttribute("class", "categoryTable");

      var firstRowfirstColumn = document.createElement("th");
    //  firstRowfirstColumn.setAttribute("class", "categoryTable");
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
      document.getElementById("DataView").appendChild(tableTag);
    })
    .catch((error) => console.log(error));
}

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
      tableTag.setAttribute("class", "categoryTable");
      tableTag.setAttribute("width", "700px");

      var firstRow = document.createElement("tr");
      firstRow.setAttribute("class", "categoryTable");

      var firstRowfirstColumn = document.createElement("th");
      //firstRowfirstColumn.setAttribute("class", "categoryTable");
      var firstRowfirstColumnV = document.createTextNode("Id");
      firstRowfirstColumn.appendChild(firstRowfirstColumnV);

      var firstRowSecondColumn = document.createElement("th");
      //firstRowSecondColumn.setAttribute("class", "categoryTable");
      var firstRowSecondColumnV = document.createTextNode("Name");
      firstRowSecondColumn.appendChild(firstRowSecondColumnV);

      var firstRowThirdColumn = document.createElement("th");
      //firstRowThirdColumn.setAttribute("class", "categoryTable");
      var firstRowThirdColumnV = document.createTextNode("Price");
      firstRowThirdColumn.appendChild(firstRowThirdColumnV);

      var firstRowForthColumn = document.createElement("th");
      //firstRowForthColumn.setAttribute("class", "categoryTable");
      var firstRowForthColumnV = document.createTextNode("Quantity");
      firstRowForthColumn.appendChild(firstRowForthColumnV);

      var firstRowFifthColumn = document.createElement("th");
      //firstRowFifthColumn.setAttribute("class", "categoryTable");
      var firstRowFifthColumnV = document.createTextNode("Category Id");
      firstRowFifthColumn.appendChild(firstRowFifthColumnV);

      firstRow.appendChild(firstRowfirstColumn);
      firstRow.appendChild(firstRowSecondColumn);
      firstRow.appendChild(firstRowThirdColumn);
      firstRow.appendChild(firstRowForthColumn);
      firstRow.appendChild(firstRowFifthColumn);
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

        secondRow.appendChild(secondRowFirstCol);
        secondRow.appendChild(secondRowSecondCol);
        secondRow.appendChild(secondRowThirdCol);
        secondRow.appendChild(secondRowForthCol);
        secondRow.appendChild(secondRowFifthCol);

        tableTag.appendChild(secondRow);
      }
      // document.getElementsByTagName("body")[0].appendChild(tableTag);
      document.getElementById("DataView").appendChild(tableTag);
    })
    .catch((error) => console.log(error));
}

//find all customers
function findAllData() {
  fetch("http://localhost:3000/api/admin/findAllCustomers", {
    method: "get",
  })
    .then((res) => res.json())
    .then((result) => {
      //console.log(result)
      //document.getElementById("customer").innerHTML =(result);
      // document.getElementById("customer").innerHTML = result.map(obj=>"Id: "+obj._id+", Name: "+obj.name+", Email: "+obj.email+", Password: "+obj.password+", Gender: "+obj.gender+", Age: "+obj.age+", Mobile No.: "+obj.mobileNo+", Address: "+obj.address+", Type Of User: "+obj.typeOfUser).join("<br/>");
      var tableTag = document.createElement("table");
      tableTag.setAttribute("class", "categoryTable");
      tableTag.setAttribute("width", "80%");

      var FirstR = document.createElement("tr");
      FirstR.setAttribute("class", "categoryTable");
      var firstRfirstC = document.createElement("th");
      // firstRfirstC.setAttribute("class","categoryTable")
      var firstRfirstCV = document.createTextNode("Id");
      firstRfirstC.appendChild(firstRfirstCV);
      var firstRsecondC = document.createElement("th");
      var firstRsecondCV = document.createTextNode("Customer Name");
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
      var firstRnineC = document.createElement("th");
      var firstRnineCV = document.createTextNode("Type Of User");
      firstRnineC.appendChild(firstRnineCV);

      FirstR.appendChild(firstRfirstC);
      FirstR.appendChild(firstRsecondC);
      FirstR.appendChild(firstRthirdC);
      FirstR.appendChild(firstRforthC);
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
        var secondRnineC = document.createElement("td");
        var secondRnineCV = document.createTextNode(result[i].typeOfUser);
        secondRnineC.appendChild(secondRnineCV);

        secondR.appendChild(secondRfirstC);
        secondR.appendChild(secondRsecondC);
        secondR.appendChild(secondRthirdC);
        secondR.appendChild(secondRforthC);
        secondR.appendChild(secondRfifthC);
        secondR.appendChild(secondRsixC);
        secondR.appendChild(secondRsevenC);
        secondR.appendChild(secondReigthC);
        secondR.appendChild(secondRnineC);

        tableTag.appendChild(secondR);
        tableTag.setAttribute("border", "1");
      }
      document.getElementById("DataView").appendChild(tableTag);
    })
    .catch((error) => console.log(error));
}

//find all orders
function findAllOrders() {
  fetch("http://localhost:3000/api/order/viewAllOrder", {
    method: "get",
  })
    .then((res) => res.json())
    .then((result) => {
      // output=document.getElementById("orders");
      // output.innerHTML = result.map(obj=>"Category Id: "+obj.categoryId+", Product Id: "+obj.productId+", Customer Id: "+obj.customerId+", Product Quantity: "+obj.productqty+", Amount: "+obj.amount).join("<br/>");
      var tableTag = document.createElement("table");
      tableTag.setAttribute("class", "categoryTable");
      tableTag.setAttribute("width", "50%");

      var FirstR = document.createElement("tr");
      FirstR.setAttribute("class", "categoryTable");
     
      var firstRfirstC = document.createElement("th");
      var firstRfirstCV = document.createTextNode("Category Id");
      firstRfirstC.appendChild(firstRfirstCV);
      var firstRsecondC = document.createElement("th");
      var firstRsecondCV = document.createTextNode("Product Id");
      firstRsecondC.appendChild(firstRsecondCV);
      var firstRthirdC = document.createElement("th");
      var firstRthirdCV = document.createTextNode("Customer Id");
      firstRthirdC.appendChild(firstRthirdCV);
      var firstRforthC = document.createElement("th");
      var firstRforthCV = document.createTextNode("Product Quantity");
      firstRforthC.appendChild(firstRforthCV);
      var firstRfifthC = document.createElement("th");
      var firstRfifthCV = document.createTextNode("Amount");
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
        var secondRthirdCV = document.createTextNode(result[i].customerId);
        secondRthirdC.appendChild(secondRthirdCV);
        var secondRforthC = document.createElement("td");
        var secondRforthCV = document.createTextNode(result[i].productqty);
        secondRforthC.appendChild(secondRforthCV);
        var secondRfifthC = document.createElement("td");
        var secondRfifthCV = document.createTextNode(result[i].amount);
        secondRfifthC.appendChild(secondRfifthCV);

        secondR.appendChild(secondRfirstC);
        secondR.appendChild(secondRsecondC);
        secondR.appendChild(secondRthirdC);
        secondR.appendChild(secondRforthC);
        secondR.appendChild(secondRfifthC);

        tableTag.appendChild(secondR);
        tableTag.setAttribute("border", "1");
      }
      document.getElementById("DataView").appendChild(tableTag);
    })
    .catch((error) => console.log(error));
}
