const firebaseConfig = {
    apiKey: "AIzaSyCmJJBHug_B2jx4wY-r8bSPWs-EIDZzvYQ",
    authDomain: "mcs-coke.firebaseapp.com",
    projectId: "mcs-coke",
    storageBucket: "mcs-coke.appspot.com",
    messagingSenderId: "669748157362",
    appId: "1:669748157362:web:42535a46d82aff13a6a2ab",
    measurementId: "G-93K05XSMP2",
  };
  
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();
  
  const db = firestore.collection("holbogdoh");
  
  let submitButton = document.getElementById("tovch");
  
  console.log(submitButton);
  
  const test = () => {
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;
    //Save Form Data to Firebase
    db.doc()
      .set({
        Email: email,
        Phone: phone,
        Message: message,
      })
      .then(() => {
        console.log("Data saved");
      })
      .catch((error) => {
        console.log(error);
      });
  
    alert("Таны санал, хүсэлт илгээгдлээ.");
  };
  
  firestore
    .collection("holbogdoh")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    });