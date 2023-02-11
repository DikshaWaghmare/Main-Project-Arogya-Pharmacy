//add categories
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

//Add Products
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

//find all categories
function viewAllCategory(){
  fetch("http://localhost:3000/api/admin/viewAllCategory", {
  method: "get",
})
.then((res) => res.json())
.then((result) => {
  output=document.getElementById("Category");
  output.innerHTML = result.map(obj=>"Id: "+obj._id+", Name: "+obj.Cname).join("<br/>");
})
.catch((error) => console.log(error));
}

//find all products
function viewAllProducts(){
  fetch("http://localhost:3000/api/admin/viewAllProducts", {
  method: "get",
})
.then((res) => res.json())
.then((result) => {
  output=document.getElementById("product");
  output.innerHTML = result.map(obj=>"Id: "+obj._id+", Name: "+obj.pname+", Price: "+obj.price+", Quantity: "+obj.quantity+", category Id: "+obj.cid).join("<br/>");
  
})
.catch((error) => console.log(error));
}

//find all customers
function findAllData(){
  fetch("http://localhost:3000/api/admin/findAllCustomers", {
  method: "get",
})
.then((res) => res.json())
.then((result) => {
  //console.log(result)
  //document.getElementById("customer").innerHTML =(result);
  document.getElementById("customer").innerHTML = result.map(obj=>"Id: "+obj._id+", Name: "+obj.name+", Email: "+obj.email+", Password: "+obj.password+", Gender: "+obj.gender+", Age: "+obj.age+", Mobile No.: "+obj.mobileNo+", Address: "+obj.address+", Type Of User: "+obj.typeOfUser).join("<br/>");
    
})
.catch((error) => console.log(error));

}

//find all orders
function findAllOrders(){
  fetch("http://localhost:3000/api/order/viewAllOrder", {
  method: "get",
})
.then((res) => res.json())
.then((result) => {
  output=document.getElementById("orders");
  output.innerHTML = result.map(obj=>"Category Id: "+obj.categoryId+", Product Id: "+obj.productId+", Customer Id: "+obj.customerId+", Product Quantity: "+obj.productqty+", Amount: "+obj.amount).join("<br/>");
})
.catch((error) => console.log(error));
}
