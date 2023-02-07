function order(){
    var _id=document.getElementById("id").value;
    var categoryId=document.getElementById("cid").value;
    var productId=document.getElementById("pid").value;
    var customerId=document.getElementById("customerId").value;
    var productqty=document.getElementById("qty").value;
    var amount=document.getElementById("amount").value;
    var dateOfOrder=document.getElementById("doforder").value;
    var order={ _id:_id,
        categoryId:categoryId,
        productId:productId,
        customerId:customerId,
        productqty:productqty,
        amount:amount,
        dateOfOrder:dateOfOrder}
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
    _id=document.getElementById("id").value=("");
    categoryId=document.getElementById("cid").value=("");
    productId=document.getElementById("pid").value=("");
    customerId=document.getElementById("customerId").value=("");
    productqty=document.getElementById("qty").value=("");
    amount=document.getElementById("amount").value=("");
    dateOfOrder=document.getElementById("doforder").value=("");
}