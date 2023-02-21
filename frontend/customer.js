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
function viewCustomerByName() {
  // var cname = document.getElementById("cname").value;
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
// // =======================================================================================================================================

// // function updatCustData(){
// //   console.log("hiiii")

// // }
// // =======================================================================================================================================

// //find category by name

function viewCategoryByName() {
  var cname=document.getElementById("Cold&Cough").innerHTML;
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
// // =======================================================================================================================================

// //Find product by name
// function viewProductByName() {
//   var pname = document.getElementById("productName").value;
  
//   fetch("http://localhost:3000/api/customer/viewProductByName/"+pname, {
//     method: "get"
//   })
//     .then((res) => res.json())
//     .then((result) => {
//       if (result.msg != null) {
//         document.getElementById("Myproduct").innerHTML = result.msg;
//       } else {
//         document.getElementById("Myproduct").innerHTML =
//           "Id: " +
//           result._id +
//           "<br>Product Name: " +
//           result.pname +
//           "<br>Product price: " +
//           result.price +
//           "<br>Product Quantity: " +
//           result.quantity +
//           "<br>Category Id: " +
//           result.cid;
//       }
//     })
//     .catch((error) => console.log(error));
// }
// // =======================================================================================================================================
// //Find product by category name
function viewProductByCategoryId() {
 
  fetch("http://localhost:3000/api/customer/viewProductByCategoryId/"+cid, {
    method: "get",
  })
    .then((res) => res.json())
    .then((result) => {
      if (result.msg != null) {
        document.getElementById("DataView").innerHTML = result.msg;
      } else {
        // window.open("./displayProductData.html");
        document.getElementById("DataView").innerHTML =
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
  var dateOfOrder = new Date();
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
        document.getElementById("MyOrder").innerHTML =
          "Category Id: " +
          result.categoryId +
          "<br>Product Id: " +
          result.productId +
          "<br>Customer Id: " +
          result.customerId +
          "<br>Product Quantity: " +
          result.productqty +
          "<br>Date Of Order: " +
          result.dateOfOrder;
      }
    })
    .catch((error) => console.log(error));
}
// =======================================================================================================================================
