
       function checkvalue() {
        if(document.getElementById("d1").value !== "" &&
           document.getElementById("d2").value !== "" &&
           document.getElementById("d3").value !== "" &&
           document.getElementById("d4").value !== ""
          )
    {
       alert("proceed!!")
    }
    else{
    alert("Please select every field");
    return false;
 }
 
}
     