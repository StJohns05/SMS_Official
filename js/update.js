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


