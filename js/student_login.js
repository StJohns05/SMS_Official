


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDuu4FIsR0yRIkOrtu6T59lqfPbN7SG53M",
  authDomain: "sms-demo-9ec85.firebaseapp.com",
  databaseURL: "https://sms-demo-9ec85-default-rtdb.firebaseio.com",
  projectId: "sms-demo-9ec85",
  storageBucket: "sms-demo-9ec85.appspot.com",
  messagingSenderId: "401316316472",
  appId: "1:401316316472:web:2929d9673d92fbfbb66dcd"
};

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});



var sname = "";
var regno = "";
var phoneno = "";
var email = "";
var password = "";
var conpassword = "";

const error = document.querySelector("#errorTxt");
const form = document.querySelector("#signupBtn");
form.addEventListener("submit", function(event) {
  
  error.innerHTML = null;
  sname = document.querySelector(".name").value.trim();
  regno = document.querySelector(".regno").value.trim();
  phoneno = document.querySelector(".phoneno").value.trim();
  email = document.querySelector(".email").value.trim();
  password = document.querySelector(".password").value.trim();
  conpassword = document.querySelector(".conpassword").value.trim();

  // Simple validations -- NO ONE TOUCH THESE
  
  if (sname.length != 0 && regno.length != 0 && phoneno.length != 0 && email.length != 0 && password.length) {

    if (password == conpassword) {
      
      // If all the validations get succeed!
      signup();
      event.preventDefault();
    }
    else {

      // alert("Password doesn't match");
      error.innerHTML = "Password doesn't matches ...."
      event.preventDefault();
    }
  }  
  else {

    // alert("Password doesn't match");
    error.innerHTML = "Please fill all the fields with valid data"
    event.preventDefault();
  }

  // Simple validations end here
});


function signup() {
  console.log("Success!");

  console.log(sname);
  console.log(regno);
  console.log(phoneno);
  console.log(email);
  console.log(password);
  console.log(conpassword);


  firebase.database().ref("Students/" + regno).set({
    Name: sname,
    Regno: regno,
    Phoneno: phoneno,
    Email: email,
    Password: password
  });


  alert("Sign up successful");
  document.querySelector("#sign-in-btn").click();

  
  document.querySelector(".name").value = "";
  document.querySelector(".regno").value = "";
  document.querySelector(".phoneno").value = "";
  document.querySelector(".email").value = "";
  document.querySelector(".password").value = "";
  document.querySelector(".conpassword").value = "";

}




function validateLogin() {
  regno = document.querySelector(".regno").value;
  password = document.querySelector(".password").value;

  
  // If all the validations get succeed!
  // login();

}


function login() {
}
