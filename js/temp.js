
const firebaseConfig = {
        apiKey: "AIzaSyB5AZ9E2DPj9TdFalJyU5zqekrnaOMYmUo",
        authDomain: "student-information-syst-2384a.firebaseapp.com",
        databaseURL: "https://student-information-syst-2384a-default-rtdb.firebaseio.com",
        projectId: "student-information-syst-2384a",
        storageBucket: "student-information-syst-2384a.appspot.com",
        messagingSenderId: "805316303709",
        appId: "1:805316303709:web:f964549876d5d34de666b4",
        measurementId: "G-T3346KNRHT"
      };
      // var firebaseConfig = {
//         apiKey: "AIzaSyDuu4FIsR0yRIkOrtu6T59lqfPbN7SG53M",
//         authDomain: "sms-demo-9ec85.firebaseapp.com",
//         databaseURL: "https://sms-demo-9ec85-default-rtdb.firebaseio.com",
//         projectId: "sms-demo-9ec85",
//         storageBucket: "sms-demo-9ec85.appspot.com",
//         messagingSenderId: "401316316472",
//         appId: "1:401316316472:web:2929d9673d92fbfbb66dcd"
// };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  const auth = firebase.auth();
  setTimeout(function() { 
          console.log(auth.currentUser);

        document.querySelector("#email").innerHTML= "Email: " + auth.currentUser.email;
        document.querySelector("#name").innerHTML= "Username: " + auth.currentUser.displayName;}, 2000);
 
  const btn = document.querySelector("#btn");
  btn.onclick = function (){
          console.log("sign out");
          auth.signOut().then(() => {
                  window.location.href = "./faculty.html";
          });

  }

  