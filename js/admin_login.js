function valid(txt1,pass)
{
     if ( document.form1.txt1.value == "admin" && document.form1.pass.value=="admin@123")
    {
          document.write("Welcome.....");
           return true;
    }
    else{
    
        alert("invalid password and Username");
        return false;
    }
 }

 $(document).on('click', '.toggle-password', function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    
    var input = $("#pass");
    input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password')
  });