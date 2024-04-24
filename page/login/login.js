  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
  import { getAuth,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyAejGuFe8kNlFxjXhFOrVK9Hg7Olu5Z4vc",
    authDomain: "klinikunklab.firebaseapp.com",
    databaseURL: "https://klinikunklab-default-rtdb.firebaseio.com",
    projectId: "klinikunklab",
    storageBucket: "klinikunklab.appspot.com",
    messagingSenderId: "1078439843358",
    appId: "1:1078439843358:web:f4f86c13a409f4ac7d400f",
    measurementId: "G-2Q6G8VMXBS"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();
 const btnlog = document.getElementById('btnku');
 
  

 

  btnlog.addEventListener('click',function(){
    const emailinpu = document.getElementById('email').value;
 const passwordinpu = document.getElementById('password').value;
    console.log("devil");
   
    signInWithEmailAndPassword(auth, emailinpu, passwordinpu)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("login success");
        window.location.href = "../menuhome/index.html";
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("login failed");
      });
  });
  document.getElementById('godaftar').onclick = function() {
    // Arahkan pengguna ke halaman berikutnya
    window.location.href = "../buatakun/index.html";
    console.log("codenya jalan boss");
}