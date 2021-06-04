// Your web app's Firebase configuration
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

const studentName = document.querySelector("#student-name"); 

auth.onAuthStateChanged(function(user) {

    console.log(user.displayName);
    studentName.innerHTML = user.displayName + "<i class='fa fa-angle-down'></i>";
});

