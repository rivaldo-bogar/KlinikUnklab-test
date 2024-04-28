  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
  import { getAuth,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyB9y4t45l1DmSocjfUoiXHgYsZErXN75cc",
    authDomain: "dokterklinikuk.firebaseapp.com",
    projectId: "dokterklinikuk",
    storageBucket: "dokterklinikuk.appspot.com",
    messagingSenderId: "463506473639",
    appId: "1:463506473639:web:db4f75cce32dc449a11182",
    measurementId: "G-RHBCDCRZ00"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();
  const btnlog = document.getElementById('btnku');

  
  btnlog.addEventListener('click',function(){
    const emailinpu = document.getElementById('email').value;
 const passwordinpu = document.getElementById('password').value;
    console.log("login dokter bug test");
   
    signInWithEmailAndPassword(auth, emailinpu, passwordinpu)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("login success");
        window.location.href = "../page/menuhome/";
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
    window.location.href = "../daftar/";
    console.log("codenya jalan boss");
}