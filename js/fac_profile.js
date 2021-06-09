function addressFunction() {
    if (document.getElementById(
    "same").checked) {
      document.getElementById(
      "secondaryaddress").value =
      document.getElementById(
      "primaryaddress").value;
      
      document.getElementById(
      "secondaryzip").value =
      document.getElementById(
      "primaryzip").value;
    } else {
      document.getElementById(
      "secondaryaddress").value = "";
      document.getElementById(
      "secondaryzip").value = "";
    }
  }
  function check() {
   // var joinyear = /^[0-9]{4}$/;
   // var year = document.getElementsByName("join");
    
    if(document.getElementById("branch").value == "Branch")
        {
           // if(year.match(joinyear)){
            alert("Please fill out all details to Check ur profile ");
           
        }
       //}
        else{
          
          alert("Profile has been Saved Successfully!! you can Check ur profile ");
        }
  }