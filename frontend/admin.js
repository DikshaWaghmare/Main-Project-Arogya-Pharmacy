function addCategory(){
    var _id=document.getElementById("id").value;
    var cname=document.getElementById("cname").value;
    var category={_id:_id,Cname:cname};
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
function addProduct(){
    var _id=document.getElementById("pid").value;
    var pname=document.getElementById("pname").value;
    var price=document.getElementById("price").value;
    var quantity=document.getElementById("qty").value;
    var cid=document.getElementById("cid").value;
    var products={_id:_id,pname:pname,price:price,quantity:quantity,cid:cid}
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
function reset(){
    document.getElementById("id").value="";
    document.getElementById("cname").value="";
    document.getElementById("pid").value="";
    document.getElementById("pname").value="";
    document.getElementById("price").value="";
    document.getElementById("qty").value="";
    document.getElementById("cid").value="";
}

function viewAllCategory(){
  fetch("http://localhost:3000/api/admin/viewAllCategory", {
  method: "get",
})
.then((res) => res.text())
.then((result) => {
  document.getElementById("Category").innerHTML = result;
  console.log(result);
})
.catch((error) => console.log(error));
}

function viewAllProducts(){
  fetch("http://localhost:3000/api/admin/viewAllProducts", {
  method: "get",
})
.then((res) => res.text())
.then((result) => {
  document.getElementById("product").innerHTML = result;
  console.log(result);
})
.catch((error) => console.log(error));
}

function findAllCustomers(){
  fetch("http://localhost:3000/api/admin/findAllCustomers", {
  method: "get",
})
.then((res) => res.text())
.then((result) => {
  document.getElementById("customers").innerHTML = result;
  console.log(result);
})
.catch((error) => console.log(error));

}

function findAllOrders(){
  fetch("http://localhost:3000/api/order/viewAllOrder", {
  method: "get",
})
.then((res) => res.text())
.then((result) => {
  document.getEle("orders").innerHTML = result;
  console.log(result);
})
.catch((error) => console.log(error));
}