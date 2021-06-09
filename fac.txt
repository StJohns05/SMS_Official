//Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDuu4FIsR0yRIkOrtu6T59lqfPbN7SG53M",
    authDomain: "sms-demo-9ec85.firebaseapp.com",
    databaseURL: "https://sms-demo-9ec85-default-rtdb.firebaseio.com",
    projectId: "sms-demo-9ec85",
    storageBucket: "sms-demo-9ec85.appspot.com",
    messagingSenderId: "401316316472",
    appId: "1:401316316472:web:2929d9673d92fbfbb66dcd"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  const auth = firebase.auth();
  
  
  const facultyName = document.querySelector("#name");
  const facultyEmail = document.querySelector("#email");
  const facultyPhone = document.querySelector("#phone");

  var faculty;
auth.onAuthStateChanged(function(user) {

  faculty = user;
  //const id = user.uid;

  console.log(user.uid); 
  database.ref().child("Faculty").child(faculty.uid).get().then((snapshot) => {
                        
    if (snapshot.exists()) {
      console.log(snapshot.val());
      const facultyData = snapshot.val();
      facultyName.value = facultyData.Name;
      facultyEmail.value = facultyData.Email;
      facultyPhone.value = facultyData.Phoneno;
      
    } 
  })
  .catch((e) => {
      console.log(e);
      console.log('Error at 43')
  });
  

});
// // var uniqueid,facultybranch,join;

// // function getdata(){
// //   uniqueid=document.getElementById("uniqueid").value;
// //   facultybranch=document.getElementById("facultybranch").value;
// //   join=document.getElementById("join").value;
// // }

 
// document.getElementById('update').onclick=function(){
//   getdata();
//   firebase.database().ref("faculty_details/"+ faculty.uid).set({
//     Uniqueid : uniqueid,
//     Branch : facultybranch,
//     Join : join,
//   });
  
// }
var uniqueid,facultybranch,join;

function getdata(){
  uniqueid=document.getElementById("id").value;
  facultybranch=document.getElementById("facultybranch").value;
  join=document.getElementById("join").value;
}

 
// document.getElementById('update').onclick=function(){
 
// }

function up_() {

 /* //fields validation

   //if fileds are empty make an alert

 //uid validation 
 var id=document.getElementById("id");
  if(id.value=="")
  {
   alert("Please enter UID");
   id.focus();
  return false;
  }
  //branch validation
  var facultybranch=document.getElementById("facultybranch");
  if(facultybranch.value=="")
  {
   alert("Please select branch!");
   facultybranch.focus();
  return false;
  }
  //year of joining
  var join=document.getElementById("join");
  if(join.value=="")
  {
   alert("Please enter Joining year!");
  join.focus();
  return false;
  }
  
  //if all fields are filled then data is updated into database
  else{*/
  getdata();
  firebase.database().ref("faculty_details/"+ faculty.uid).set({
    Uniqueid : uniqueid,
    Branch : facultybranch,
    Join : join,
  });
}
  alert("success");
//}

var faculty;
auth.onAuthStateChanged(function(user) {

  faculty = user;
  // const id = user.uid;

  console.log(user.uid); 


database.ref().child("faculty_details").child(faculty.uid).get().then(  (snapshot) => {
  
    if (snapshot.exists()) {
        console.log(snapshot.val());
        let faculty_Details_Fetch = snapshot.val();
        faculty_Details = Object.values(faculty_Details_Fetch);
        console.log(faculty_Details);

        set_Data(faculty_Details)


  
    }else{
      console.log('If failed');
    }
  })
  .catch((e) => {
    a = String.toString(e);
      console.log(a);
  });
  
});

function set_Data(faculty_Details) {
  
  data = faculty_Details;
  console.log('data : ' + data);
  let set_Branch = document.getElementById('facultybranch').value=(data[0]);
  let set_Join = document.getElementById('join').value=(data[1]);
  let set_UniqueId = document.getElementById('id').value=(data[2]);
}







  
  