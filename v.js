
var firebaseConfig = {
  apiKey: "AIzaSyC6o7D2HfA1Dd8F0ItDkkXAEa2BroUoFK0",
  authDomain: "web-app-abfc2.firebaseapp.com",
  projectId: "web-app-abfc2",
  storageBucket: "web-app-abfc2.appspot.com",
  messagingSenderId: "294983887113",
  appId: "1:294983887113:web:687b17a9b9eeaa14f4cbd8",
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
//---------------- ready data------//

let admin;
let password;
// var database= firebase.database;
function get_Data() {
    //*------------------**********
    admin = document.getElementById('admin_input').value;
    password = document.getElementById('password_input').value;
    console.log( 'Admin Email 👉', admin);
    console.log('Admin password 👉' ,password);
}
//-------------------insert data---------q
function check_Data() {
  get_Data(); // Initializing Data
  send_data();

}
function send_data() {
  get_Data();// for 
  firebase
    .database()
    .ref("students/" + "kanna")
    .set({Admin:admin,pin:password
    });
  alert("Data Submited To DataBase Sucessfully...");
}

//   document.getElementById('insert').onclick= function(){}

//   write();

function get_reg_num() {
  Reg_number = document.getElementById("Register_Number").value;
  console.log(Reg_number);
  check_reg_number();
}
function check_reg_number() {
  if (Register_Number.length < 10) {
    //TODO Register_Number---------
    let invalid_reg = document.getElementById("invalid_reg");
    invalid_reg = invalid_reg.innerHTML = "Invalid Register Number";
    alert("Invalid Register Number");
    return false;
  } else {
    return true;
  }
}
function check_Names(user_name, Mother_Name, Father_Name) {
  var username=user_name;
  var MotherName=Mother_Name;
  var FatherName=Father_Name;
  var reg = /^[A-Za-z ]+$/;
  if (
    reg.test(username) &&
    reg.test(Mother_Name) &&
    reg.test(Father_Name) &&
    username.length > 4 &&
    MotherName.length > 4 &&
    FatherName.length > 4 &&
    check_Characters(username) &&
    check_Mom_Characters(Mother_Name) &&
    check_Dad_Characters(Father_Name) &&
    check_Gaurdian_Characters(Gaurdian_Name)
  ) {
    return true;
  } else {
    alert(
      "Invalid User Name or Invalid Mother Name or Invalid Father Name ...."
    );
    return false;
  }
}

function check_Characters(username) {
  alert("Checking Data.....");
  // var char_str = name.split('');

  var name = username;
  for (var name_count = 0; name_count <= 2; name_count++) {
    var char_str = name.split("");

    for (var i = 0; i < char_str.length; i++) {
      var count = 1;
      for (var j = i + 1; j < char_str.length; j++) {
        if (char_str[i] == char_str[j] && char_str[i] != " ") {
          count++;
          //Set string1[j] to 0 to avoid printing visited character
          char_str[j] = "0";
        }
      }
      //A character is considered as duplicate if count is greater than 1
      // checking repeating char
      if (count > 4 && char_str[i] != "0") {
        alert("System Dictated Some Repeated Characters In User Name...");
        return false;
      }

    }

    return true;
  }
}

function check_Mom_Characters(name) {
  name = Mother_Name;
  for (var name_count = 0; name_count <= 2; name_count++) {
    var char_str = name.split("");

    for (var i = 0; i < char_str.length; i++) {
      var count = 1;
      for (var j = i + 1; j < char_str.length; j++) {
        if (char_str[i] == char_str[j] && char_str[i] != " ") {
          count++;
          //Set string1[j] to 0 to avoid printing visited character
          char_str[j] = "0";
        }
      }
      //A character is considered as duplicate if count is greater than 1
      // checking repeating char
      if (count > 4 && char_str[i] != "0") {
        alert("System Dictated Some Repeated Characters In Your Mother's Name");
        return false;
      }
    }
  }

  return true;
}

function check_Dad_Characters(name) {
  name = Father_Name;
  for (var name_count = 0; name_count <= 2; name_count++) {
    var char_str = name.split("");

    for (var i = 0; i < char_str.length; i++) {
      var count = 1;
      for (var j = i + 1; j < char_str.length; j++) {
        if (char_str[i] == char_str[j] && char_str[i] != " ") {
          count++;
          //Set string1[j] to 0 to avoid printing visited character
          char_str[j] = "0";
        }
      }
      //A character is considered as duplicate if count is greater than 1
      // checking repeating char
      if (count > 4 && char_str[i] != "0") {
        alert("System Dictated Some Repeated Characters In Father's Names");
        return false;
      }
    }
  }
  return true;
}

function check_Gaurdian(Gaurdian_Name) {
  if (Gaurdian_Name.length == 0) {
    if (check_Gaurdian_Characters(Gaurdian_Name)) {
      return true;
    }
  } else {
    var reg = /^[A-Za-z ]+$/;
    if (reg.test(Gaurdian_Name)) {
      return true;
    }
  }
  return false;
}

function check_Gaurdian_Characters(Gaurdian_Name) {
  var name = Gaurdian_Name;

  for (var name_count = 0; name_count <= 2; name_count++) {
    var char_str = name.split("");

    for (var i = 0; i < char_str.length; i++) {
      var count = 1;
      for (var j = i + 1; j < char_str.length; j++) {
        if (char_str[i] == char_str[j] && char_str[i] != " ") {
          count++;
          //Set string1[j] to 0 to avoid printing visited character
          char_str[j] = "0";
        }
      }
      //A character is considered as duplicate if count is greater than 1
      // checking repeating char
      if (count > 4 && char_str[i] != "0") {
        alert(
          "System Dictated Some Repeated Characters In Gaurdian Name's Names"
        );
        return false;
      }
    }
  }
  return true;
}

function check_Aadhar_number(Aadhar_Number) {
  var reg = /^[A-Za-z ]+$/;
  if (Aadhar_Number.length > 12 && reg.test(Aadhar_Number)) {
    alert("Invalid Aadhar Number");
    return false;
  }
  return true;
}

function check_Income(Income_Certificate_Number, Income_certificate_Link) {
  //if(false){//Income_Certificate_Number ,Income_certificate_Link
  //  return false;
  //}
  if (isURL(Income_certificate_Link)) {
    return true;
  } else {
    alert("Invalid IncomeCertificate Link...");
    return false;
  }
}

function check_Caste(caste_certificate_Number, Caste_certificate_link) {
  //if(false){//caste_certificate_Number ,Caste_certificate_link
  //  return false;
  //}
  if (isURL(Caste_certificate_link)) {
    return true;
  } else {
    alert("Invalid Caste Certificate Link...");
    return false;
  }
}

function isURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return pattern.test(str);
}


function update(params) {
  var reg = prompt("Enter your Rege");
}
