function storeCustomerInfo() {
  var nameValue = document.getElementById("name").value;
  var emailValue = document.getElementById("email").value;
  var passwordValue = document.getElementById("password").value;
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
  var mobileNo = document.getElementById("mobileNo").value;
  var address = document.getElementById("address").value;
  var admin = document.getElementsByName("typeOfUser")[0].checked;
  var customer = document.getElementsByName("typeOfUser")[1].checked;
  var typeOfUser;
  if (admin) {
    typeOfUser = "admin";
  }
  if (customer) {
    typeOfUser = "customer";
  }
  var customers = {
    name: nameValue,
    email: emailValue,
    password: passwordValue,
    gender: gender,
    age: age,
    mobileNo: mobileNo,
    address: address,
    typeOfUser: typeOfUser,
  };
  console.log(customers);
  fetch("http://localhost:3000/api/customer/signUp", {
    method: "post",
    body: JSON.stringify(customers),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((result) => {
      document.getElementById("msg").innerHTML = result.msg;
      if(result.msg=="Account created Successfully!"){
        window.open("./customer.html");
    }else {
        document.getElementById("msg").innerHTML=result.msg;
    }
    })
    .catch((error) => {
    console.log(error);
  })
  reset();
}


function reset() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementsByName("gender").value = "";
  document.getElementById("age").value = "";
  document.getElementById("mobileNo").value = "";
  document.getElementById("address").value = "";
}
