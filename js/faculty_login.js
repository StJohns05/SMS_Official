
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

$(document).on('click', '.toggle-password', function() {

  $(this).toggleClass("bi-eye");
  
  var input = $("#password,#Password");
  
  input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password')
});