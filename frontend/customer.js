
function viewCustomerByName(){
  var cname=document.getElementById("cname").value;
  var customers = {
    name:cname
  };
  fetch("http://localhost:3000/api/customer/findCustomerByName", {
    method: "post",
    body: JSON.stringify(customers),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((result) => {
      document.getElementById("cDetails").innerHTML = ("Id: "+result._id+"<br>Name:"+result.name+"<br>Email: "+result.email+"<br>Password: "+result.password+"<br>Gender: "+result.gender+"<br>Age: "+result.age+"<br>Name:Mobile No.: "+result.mobileNo+"<br>Address: "+result.address+"<br>TypeOfUser: "+result.typeOfUser);
    })
    .catch((error) => console.log(error));
  
}

function viewCategoryByName(){
  var cname=document.getElementById("categoryName").value;
  var Category = {
    Cname:cname
  };
  fetch("http://localhost:3000/api/customer/viewCategoryByName", {
    method: "post",
    body: JSON.stringify(Category),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.text())
    .then((result) => {
      document.getElementById("MyCategory").innerHTML = result.msg;
    })
    .catch((error) => console.log(error));
  
}
function viewCategoryByName(){
  var cname=document.getElementById("categoryName").value;
  var Category = {
    Cname:cname
  };
  fetch("http://localhost:3000/api/customer/viewCategoryByName", {
    method: "post",
    body: JSON.stringify(Category),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.text())
    .then((result) => {
      document.getElementById("MyCategory").innerHTML = result;
    })
    .catch((error) => console.log(error));
  
}

function viewProductByName(){
  var pname=document.getElementById("productName").value;
  var product = {
    pname:pname
  };
  fetch("http://localhost:3000/api/customer/viewProductByName", {
    method: "post",
    body: JSON.stringify(product),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.text())
    .then((result) => {
      document.getElementById("Myproduct").innerHTML = result;
    })
    .catch((error) => console.log(error));
  
}
function order(){
  var categoryId=document.getElementById("cid").value;
  var productId=document.getElementById("pid").value;
  var customerId=document.getElementById("customerId").value;
  var productqty=document.getElementById("qty").value;
  var amount=document.getElementById("amount").value;
  var dateOfOrder=document.getElementById("doforder").value;
  var order={ 
      categoryId:categoryId,
      productId:productId,
      customerId:customerId,
      productqty:productqty,
      amount:amount,
      dateOfOrder:dateOfOrder}
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
function reset(){
  categoryId=document.getElementById("cid").value=("");
  productId=document.getElementById("pid").value=("");
  customerId=document.getElementById("customerId").value=("");
  productqty=document.getElementById("qty").value=("");
  amount=document.getElementById("amount").value=("");
  dateOfOrder=document.getElementById("doforder").value=("");
}
function viewOrder(){
  var cid=document.getElementById("custId").value;
  var order = {
    customerId:cid
  };
  fetch("http://localhost:3000/api/order/viewOrderByCustId", {
    method: "post",
    body: JSON.stringify(order),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.text())
    .then((result) => {
      document.getElementById("MyOrder").innerHTML = result;
    })
    .catch((error) => console.log(error));
}