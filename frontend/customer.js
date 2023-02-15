//find customer by Name
function viewCustomerByName() {
  var cname = document.getElementById("cname").value;
  var customers = {
    name: cname,
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
      if (result.msg != null) {
        output = document.getElementById("cDetails");
        output.innerHTML = result.msg;
      } else {
        output = document.getElementById("cDetails");
        output.innerHTML =
          "Id: " +
          result._id +
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
// =======================================================================================================================================

// function updatCustData(){
//   console.log("hiiii")

// }
// =======================================================================================================================================

//find category by name
function viewCategoryByName() {
  var cname = document.getElementById("categoryName").value;
  var Category = { Cname: cname };
  fetch("http://localhost:3000/api/customer/viewCategoryByName", {
    method: "post",
    body: JSON.stringify(Category),
    headers: {
      "Content-type": "application/json",
    },
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
// =======================================================================================================================================

//Find product by name
function viewProductByName() {
  var pname = document.getElementById("productName").value;
  var product = {
    pname: pname,
  };
  fetch("http://localhost:3000/api/customer/viewProductByName", {
    method: "post",
    body: JSON.stringify(product),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((result) => {
      if (result.msg != null) {
        document.getElementById("Myproduct").innerHTML = result.msg;
      } else {
        document.getElementById("Myproduct").innerHTML =
          "Id: " +
          result._id +
          "<br>Product Name: " +
          result.pname +
          "<br>Product price: " +
          result.price +
          "<br>Product Quantity: " +
          result.quantity +
          "<br>Category Id: " +
          result.cid;
      }
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
  var amount = document.getElementById("amount").value;
  var dateOfOrder = document.getElementById("doforder").value;
  var order = {
    categoryId: categoryId,
    productId: productId,
    customerId: customerId,
    productqty: productqty,
    amount: amount,
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
function viewOrder() {
  var cid = document.getElementById("custId").value;
  var order = {
    customerId: cid,
  };
  fetch("http://localhost:3000/api/order/viewOrderByCustId", {
    method: "post",
    body: JSON.stringify(order),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((result) => {
      if (result.msg != null) {
        document.getElementById("MyOrder").innerHTML = result.msg;
      } else {
        document.getElementById("MyOrder").innerHTML =
          "Category Id: " +
          result.categoryId +
          "<br>Product Id: " +
          result.productId +
          "<br>Customer Id: " +
          result.customerId +
          "<br>Product Quantity: " +
          result.productqty +
          "<br>Amount: " +
          result.amount +
          "<br>Date Of Order: " +
          result.dateOfOrder;
      }
    })
    .catch((error) => console.log(error));
}
// =======================================================================================================================================
