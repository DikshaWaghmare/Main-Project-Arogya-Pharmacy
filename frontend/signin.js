//signin

function signinUser() {
  var emailValue = document.getElementById("email").value;
  var passwordValue = document.getElementById("password").value;
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
    email: emailValue,
    password: passwordValue,
    typeOfUser: typeOfUser,
  };
  console.log(customers);
  fetch("http://localhost:3000/api/customer/signIn", {
    method: "post",
    body: JSON.stringify(customers),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("msg").innerHTML = data.msg;
     // console.log(data);
      if(data.msg=="Admin successfully login!"){
        window.location.href="file:///C:/Users/gramp/OneDrive/Desktop/nodejstraining/Main%20Project-Arogya%20Pharmacy/frontend/admin.html";

    }else if(data.msg=="Customer successfully login!"){
      console.log(data)
      //window.location.href="file:///C:/Users/gramp/OneDrive/Desktop/nodejstraining/Main%20Project-Arogya%20Pharmacy/frontend/customer.html";
    } else {
        document.getElementById("msg").innerHTML=data.msg;

    }
    })
    .catch((error) => console.log(error));
  reset();
}

function viewCustomer() {
  
  fetch("http://localhost:3000/api/customer/signIn", {
    method: "get",
  })
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("msg").innerHTML = data.msg;
     // console.log(data);
      if(data.msg=="Admin successfully login!"){
        window.location.href="file:///C:/Users/gramp/OneDrive/Desktop/nodejstraining/Main%20Project-Arogya%20Pharmacy/frontend/admin.html";

    }else if(data.msg=="Customer successfully login!"){
      console.log(data)
      //window.location.href="file:///C:/Users/gramp/OneDrive/Desktop/nodejstraining/Main%20Project-Arogya%20Pharmacy/frontend/customer.html";
    } else {
        document.getElementById("msg").innerHTML=data.msg;

    }
    })
    .catch((error) => console.log(error));
  reset();
}

function reset() {
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
}
