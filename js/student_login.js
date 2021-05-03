<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f0713b48107a27dbc3e567ee876c7d8e18a95499
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
<<<<<<< HEAD
});
=======
});

function signup() {
  console.log("Success!");

  var name = document.querySelector(".name").value;
  var regno = document.querySelector(".regno").value;
  var phoneno = document.querySelector(".phoneno").value;
  var email = document.querySelector(".email").value;
  var password = document.querySelector(".password").value;
  var conpassword = document.querySelector(".conpassword").value;


  console.log(name);
  console.log(regno);
  console.log(phoneno);
  console.log(email);
  console.log(password);
  console.log(conpassword);

  alert("Sign up successful");
  document.querySelector("#sign-in-btn").click();
}
=======
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
>>>>>>> 9ff675bc4ecfdb599361e2bbcb8ddd370edec65e
>>>>>>> f0713b48107a27dbc3e567ee876c7d8e18a95499
