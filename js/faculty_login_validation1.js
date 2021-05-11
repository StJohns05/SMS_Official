const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
  });
  
  sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
  });
  function validate2(){
      var result= "";
      result+=validateEmail();
      result+=validatePassword();
      if (result == "") return true;
	
	 alert("Validation Result:\n\n" + result);
	 return false;

  }
function validate() {  
	var result = "";	
	result += validateName(); 	
	result += validateEmail();
	result += validatePassword();
    result += validateRegisternumber();
    result += validatePhonenumber();
	
	if (result == "") return true;
	
	alert("Validation Result:\n\n" + result);
	return false;	
}
     //need to validate phoneno register number.....total of 5 validations are needed

function validateName() {
	var name = document.getElementsByName("Username")[0].value;
	if (name.length <= 3 )
		return "Name should be at least three characters.\n";	
	return "";
}

function validatePassword() {
	var password = valueOf("password");
	var retype = valueOf("retype_password");
	
	if (password.length <= 6) 
		return "Password should be at least 6 characters.\n";
	
	if (password != retype) 
		return "Passwords do not match.\n";	
	return "";

}
function validateRegisternumber(){
    var rno=document.getElementsByName("regno").value;
    if(rno.length<10 || rno.length>10)
      return "registration number should contain exact 10 charcters";
    return "";
}
function validatePhonenumber(){
    var pno=document.getElementsByName("phonenumber").value;
    if(pno.length<10 || pno.length>10)
      return "contact number should contain exact 10 digits";
    return "";



}
function validateEmail() {
	var email = valueOf("email");
	
	
	if (email.indexOf('@') == -1) 
		return "Email should be a valid address.\n";

	return "";	
}



function valueOf(Username) {
	return document.getElementsByName(Username)[0].value;
}