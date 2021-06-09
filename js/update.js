function check()
{
var institution = document.forms["profile"]["Institution"].value;
var joinyear = document.forms["profile"]["join"].value;
var regulation = document.forms["profile"]["regulation"].value;
var fname = document.forms["profile"]["fname"].value;
var mname = document.forms["profile"]["mname"].value;
var fphone = document.forms["profile"]["fphone"].value;

/*var altphone = document.forms["profile"]["altphone"].value;
var dob = document.forms["profile"]["dob"].value;
/var aadhar = document.forms["profile"]["aadhar"].value;
var aadhardoc = document.forms["profile"]["aadhardoc"].value;
var income= document.forms["profile"]["income"].value; 
var incomedoc = document.forms["profile"]["incomedoc"].value;*/

//var valid = true;

/*if(institute == null  || institute == "", year == null || year == "" ,reg == null || reg =="" , dadname == null || 
    dadname == "" , momname == null || momname == "" ,mobile == null || mobile == "" , altmobile == null || altmobile == "" ,
    date == null || date == "" , adhar == null || adhar == "" , adhardoc == null || adhardoc == "" , aincome == null || aincome == "" ,
    income_doc == null || income_doc == "")
                          {
                            alert("please checkout fields");
                          
     
   }
   else{
   
     alert("Saved Successfully");
   }
  }*/

  var institution=document.getElementById("institution");
      if(institution.value=="")
		{
			alert("Please enter institution");
			institution.focus();
			return false;
		}

	var joinyear=document.getElementById("joinyear").value;
		if(joinyear.value=="")
		{
		alert("Please enter year");
		joinyear.focus();
		return false;
		}
	var regulation=document.getElementById("regulation");
		if(regulation.value=="")
		{
		alert("Please enter regulation");
		regulation.focus();
		return false;
		}
	var dob=document.getElementById("dob");
		if(dob.value=="")
		{
		alert("Please enter dob");
		dob.focus();
		return false;
		}
	var fname=document.getElementById("fname");
		if(fname.value=="")
		{
		alert("Please enter father name");
		fname.focus();
		return false;
		}
	var mname=document.getElementById("mname");
		if(mname.value=="")
		{
		alert("Please enter mothers name");
		mname.focus();
		return false;
		}
	var fphone=document.getElementById("fphone");
		if(fphone.value=="")
		{
		alert("Please enter mobile no");
		fphone.focus();
		return false;
		}
	/*var city=document.getElementById("twnc");
		if(city.value=="")
		{
		alert("Please re-enter town/city");
		city.focus();
		return false;
		}
	var post=document.getElementById("ptc");
		if(pin.value=="")
		{
		alert("Please re-enter Postcode");
		pin.focus();
		return false;*/
		}

