import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyB9y4t45l1DmSocjfUoiXHgYsZErXN75cc",
    authDomain: "dokterklinikuk.firebaseapp.com",
    databaseURL: "https://dokterklinikuk-default-rtdb.firebaseio.com",
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
 const btndaftar = document.getElementById('btndaf');

btndaftar.addEventListener('click',function(){
    const emailinpu = document.getElementById('email').value;
 const passwordinpu = document.getElementById('password').value;
   
   
    createUserWithEmailAndPassword(auth, emailinpu, passwordinpu)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        window.location.href = "../login/";
        alert("Berhasil Terdaftarkan")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Register Failed");
      });
  });