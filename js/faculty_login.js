const firebaseConfig = {
  apiKey: "AIzaSyB5AZ9E2DPj9TdFalJyU5zqekrnaOMYmUo",
  authDomain: "student-information-syst-2384a.firebaseapp.com",
  databaseURL: "https://student-information-syst-2384a-default-rtdb.firebaseio.com",
  projectId: "student-information-syst-2384a",
  storageBucket: "student-information-syst-2384a.appspot.com",
  messagingSenderId: "805316303709",
  appId: "1:805316303709:web:f964549876d5d34de666b4",

};
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
// firebase.initializeApp(firebaseConfig);
//   const auth = firebase.auth();
//   const database= firebase.database();
//   var Usernamev,emailv,passwordv,cntno;
//   class sign_up_btn{
//      Usernamev=document.getElementsByClassName("Username").value;
//      emailv=document.getElementsByClassName("Email").value;
//      cntno=document.getElementsByClassName("Contact Number").value;
//      passwordv=document.getElementsByClassName("Passsword").value;
//      conpasv=document.getElementsByClassName("Confirm Password").value;
//   // const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
//   // promise.catch(e=>alert(e.message));
//   // alert(" signed up");
//      function writeUserData(Usernamev,emailv,cntno){
//          firebase.database().ref('Faculty/'+cntno).set({
//              username:Usernamev,
//              email:emailv,
//              Phno:cntno    
//          });
//      }
//      writeUserData(Usernamev,emailv,cntno);
    //  if(user!=null){
    //     alert("signed up");
    //     }else{
    //     alert("please fill the details");
    //    }
//  document.getElementById("signUp").onclick=function(){
//      signUp();
//      console.log('success');
//      firebase.database().ref('Form/'+cntno).set(
//          {
//          NameofStudent: Username,
//          email:email,
//          password: password,
//          Number:cntno
//      });
//     }
   // }
         

