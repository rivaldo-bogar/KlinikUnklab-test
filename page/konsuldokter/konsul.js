

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase,ref,set,get,child} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

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



  const db = getDatabase(app);
  document.getElementById("daftarkon").addEventListener('click',function(e){
    set(ref(db,'daftarkonsul/' + document.getElementById("nama").value),
    {
      username : document.getElementById("nama").value,
      tanggal : document.getElementById("tanggal").value,
      NamaDokter : document.getElementById("namadokter").value
    })
    alert("Login Success");
  })