// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmJJBHug_B2jx4wY-r8bSPWs-EIDZzvYQ",
  authDomain: "mcs-coke.firebaseapp.com",
  databaseURL:
    "https://mcs-coke-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mcs-coke",
  storageBucket: "mcs-coke.appspot.com",
  messagingSenderId: "669748157362",
  appId: "1:669748157362:web:42535a46d82aff13a6a2ab",
  measurementId: "G-93K05XSMP2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//reference
var holbogdohFormDB = firebase.database().ref("holbogdohForm");

document.getElementById("holbogdohForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var email = getElementValue("email");
  var phone = getElementValue("phone");
  var message = getElementValue("message");

  saveholbogdoh(email, phone, message);
}
const saveholbogdoh = (email, phone, message) => {
  var newholbogdohForm = holbogdohFormDB.push();

  newholbogdohForm.set({
    email: email,
    phone: phone,
    message: message,
  });
};
const getElementValue = (id) => {
  return document.getElementById(id).value;
};
