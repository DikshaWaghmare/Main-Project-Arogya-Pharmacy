
function viewAllCategory(){
    //console.log(window.location)
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
    document.getElementById("products").innerHTML = result;
    console.log(result);
  })
  .catch((error) => console.log(error));
}

function viewCustomer(){
  fetch("http://localhost:3000/api/customer/findCustomerById", {
    method: "get",
  })
  .then((res) => res.text())
  .then((result) => {
    //document.getElementById("products").innerHTML = result;
    console.log(result);
  })
  .catch((error) => console.log(error));
}