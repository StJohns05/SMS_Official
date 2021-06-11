// //Your web app's Firebase configuration
// var firebaseConfig = {
//   apiKey: "AIzaSyDuu4FIsR0yRIkOrtu6T59lqfPbN7SG53M",
//   authDomain: "sms-demo-9ec85.firebaseapp.com",
//   databaseURL: "https://sms-demo-9ec85-default-rtdb.firebaseio.com",
//   projectId: "sms-demo-9ec85",
//   storageBucket: "sms-demo-9ec85.appspot.com",
//   messagingSenderId: "401316316472",
//   appId: "1:401316316472:web:2929d9673d92fbfbb66dcd"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const database = firebase.database();
// const auth = firebase.auth();







const studentName = document.querySelector("#name");
const studentEmail = document.querySelector("#email");
const studentPhone = document.querySelector("#phone");
const studentRegNo = document.querySelector("#regno");

let student_Details;// student's data in an Array form

var student;
auth.onAuthStateChanged(function(user) {

  student = user;
  const id = user.uid;

  console.log(user.uid); 
  database.ref().child("Students").child(id).get().then((snapshot) => {
                        
    if (snapshot.exists()) {
      console.log(snapshot.val());
      const studentData = snapshot.val();
      studentName.value = studentData.Name;
      studentEmail.value = studentData.Email;
      studentPhone.value = studentData.Phoneno;
      studentRegNo.value = studentData.Regno;
    } 
  })
  .catch((e) => {
      console.log(e);
      console.log('Error at 43')
  });

});

var institution,joinyear,regulation,branch,fname,
mname,fphone,altphone,dob,
gender,
aadhar,aadhardoc,
income,incomedoc,
caste,castedoc,
primaryaddress,
primaryzip,
secondaryaddress,
secondaryzip,
sscticket,
sscpercentage,
sscurl,
sscyear,
interticket,interpercentage,interurl,interyear;

function get_Data(){
  institution=document.getElementById("institution").value;
  joinyear=document.getElementById("joinyear").value;
  regulation=document.getElementById("regulation").value;
  branch=document.getElementById("branch").value;
  fname=document.getElementById("fname").value;
  mname=document.getElementById("mname").value;
  fphone=document.getElementById("fphone").value;
  altphone=document.getElementById("altphone").value;
  dob=document.getElementById("dob").value;
  gender=document.getElementById("gender").value;
  
  aadhar=document.getElementById("aadhar").value;
  aadhardoc=document.getElementById("aadhardoc").value;
  income=document.getElementById("income").value;
  incomedoc=document.getElementById("incomedoc").value;

  caste=document.getElementById("caste").value;
  castedoc=document.getElementById("castedoc").value;
  primaryaddress=document.getElementById("primaryaddress").value;
  primaryzip=document.getElementById("primaryzip").value;
  secondaryaddress=document.getElementById("secondaryaddress").value;
  secondaryzip=document.getElementById("secondaryzip").value;
  sscticket=document.getElementById("sscticket").value;
  sscpercentage=document.getElementById("sscpercentage").value;
  sscurl=document.getElementById("sscurl").value;
  sscyear=document.getElementById("sscyear").value;
  interticket=document.getElementById("interticket").value;
  interpercentage=document.getElementById("interpercentage").value;
  interurl=document.getElementById("interurl").value;
  interyear=document.getElementById("interyear").value;
}
//validation
// function check() {
//   if(document.getElementById("branch").value !== "Branch")
//       {
//           if(document.getElementById("gender").value !== "gender"){
//          alert("Please fill out all details to Check ur profile ");
//       }
//      }
//       else{
//          alert("Profile has been Saved Successfully!! you can Check ur profile ");
//       }
//     }


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
document.getElementById('save').onclick=function(){
  
  get_Data();
  firebase.database().ref("students_details/"+ student.uid).set({
    Institution : institution,
    Year_Of_Join : joinyear,
    Regulation : regulation,
    Branch : branch,
    
    Date_Of_Birth : dob,
    Gender : gender,
    Aadhar_Number : aadhar,
    Aadhar_URL : aadhardoc,
    Annual_Income : income,
    Income_URL : incomedoc,
    Caste : caste,
    Caste_URL : castedoc,
    Primary_Address : primaryaddress,
    Primary_Zip : primaryzip,
    Secondaryaddress : secondaryaddress,
    Secondaryzip : secondaryzip,
    SSC_HallTicket_Number : sscticket,
    SSC_Percentage  : sscpercentage,
    SSC_Certificate_URL : sscurl,
    SSC_Year_Of_pass : sscyear,
    Inter_HallTicket_Number : interticket,
    Inter_Percentage  : interpercentage,
    Inter_Certificate_URL : interurl,
    Inter_Year_Of_pass : interyear,
  
  });
  firebase.database().ref("students_details/" + student.uid + "/parent_details").set({
    Father_Name : fname,
    Mother_Name : mname,
    Mobile_Number : fphone,
    Alternate_Mobile_Number : altphone,
  });

  alert("Data submitted Successfully");

}

// const dbRef = firebase.database().ref();
// dbRef.child("students_details").child(209189857677).get().then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });
 var student;
auth.onAuthStateChanged(function(user) {

  student = user;
  // const id = user.uid;

  console.log(user.uid); 


database.ref().child("students_details").child(student.uid).get().then(  (snapshot) => {
  
    if (snapshot.exists()) {
        console.log(snapshot.val());
        let student_Details_Fetch = snapshot.val();
        student_Details = Object.values(student_Details_Fetch);
        console.log(student_Details);

        set_Data(student_Details)


        institution.value = studentDetails.Institution;
        joinyear.value = studentDetails.Year_Of_Join;
        regulation.value = studentDetails.Regulation;
        branch.value = studentDetails.Branch;
        dob.value = studentDetails.Date_Of_Birth;
        gender.value = studentDetails.Gender;
        aadhar.value = studentDetails.Aadhar_Number;
        aadhardoc.value=studentDetails.Aadhar_URL;
        income.value=studentDetails.Annual_Income;
        incomedoc.value=studentDetails.Income_URL;
        caste.value=studentDetails.Caste;
        castedoc.value=studentDetails.Caste_URL;
        primaryaddress.value=studentDetails.Primary_Address;
        primaryzip.value=studentDetails.Primary_Zip;
        secondaryaddress.value=studentDetails.Secondaryaddress;
        secondaryzip.value=studentDetails.Secondaryzip;
        sscticket.value=studentDetails.SSC_HallTicket_Number;
        sscpercentage.value=studentDetails.SSC_Percentage;
        sscurl.value=studentDetails.SSC_Certificate_URL;
        sscyear.value=studentDetails.SSC_Year_Of_Pass;
        interticket.value=studentDetails.Inter_HallTicket_Number;
        interpercentage.value=studentDetails.Inter_Percentage;
        interurl.value=studentDetails.Inter_Certificate_URL;
        interyear.value=studentDetails.Inter_Year_Of_Pass;
    }else{
      console.log('If failed');
    }
  })
  .catch((e) => {
    a = String.toString(e);
      console.log(a);
  });
  


});

function set_Data(student_Details) {

 

  console.log('started....');
  data = student_Details;
  const parent_Details = Object.values( data[24]);
  console.log('data : ' + data);
  console.log('parents : ' + parent_Details)
  console.log('Instalizing to an local array');
  let set_Adhar = document.getElementById('aadhar').value=(data[0]);
  let set_Aadhardoc = document.getElementById('aadhardoc').value=(data[1]);
  let set_Income = document.getElementById('income').value=(data[2]);
  let set_Branch = document.getElementById('branch').value=(data[3]);
  let set_Caste = document.getElementById('caste').value=(data[4]);
  let set_Castedoc = document.getElementById('castedoc').value=(data[5]);
  let set_Dob =  document.getElementById('dob').value=(data[6]);
  let set_Gender = document.getElementById('gender').value=(data[7]);
  let set_Incomedoc = document.getElementById('incomedoc').value=(data[8]);
  let set_Institution = document.getElementById('institution').value=(data[9]);
  let set_Interurl = document.getElementById('interurl').value=(data[10]);
  let set_Interticket = document.getElementById('interticket').value=(data[11]);
  let set_Interpercentage = document.getElementById('interpercentage').value=(data[12]);
  let set_Unteryear = document.getElementById('interyear').value=(data[13]);
  let set_Primaryaddress = document.getElementById('primaryaddress').value=(data[14]);
  let set_Primaryzip = document.getElementById('primaryzip').value=(data[15]);
  let set_Regulation = document.getElementById('regulation').value=(data[16]);
  let set_Sscurl = document.getElementById('sscurl').value=(data[17]);
  let set_Sscticket = document.getElementById('sscticket').value=(data[18]);
  let set_Sscpercentage = document.getElementById('sscpercentage').value=(data[19]);
  let set_Sscyear = document.getElementById('sscyear').value=(data[20]);
  let set_Secondaryaddress = document.getElementById('secondaryaddress').value=(data[21]);
  let set_Secondaryzip = document.getElementById('secondaryzip').value=(data[22]);
  let set_Joinyear = document.getElementById('joinyear').value=(data[23]);

  //----------------------------------------------
  let altetnate_M_N = document.getElementById('altphone').value=(parent_Details[0]);
  let father_Name = document.getElementById('fname').value=(parent_Details[1]);
  let mobile_Number = document.getElementById('fphone').value=(parent_Details[2]);
  let mother_Name = document.getElementById('mname').value=(parent_Details[3]);
  console.log('seted');
}


//for log out button

// function noBack()
//          {
//              window.history.forward()
//          }
//         noBack();
//         window.onload = noBack;
//         window.onpageshow = function(evt) { if (evt.persisted) noBack() }
//         window.onunload = function() { void (0) }



       