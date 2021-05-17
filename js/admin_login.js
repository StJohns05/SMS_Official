function valid(txt1,password)
{
     if ( document.form1.txt1.value == "admin" && document.form1.password.value=="admin@123")
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
    
    var input = $("#password");
    input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password')
  });