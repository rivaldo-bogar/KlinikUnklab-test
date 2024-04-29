
// Import fungsi initializeApp dari modul firebase-app
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";

// Import fungsi-fungsi yang diperlukan dari modul firebase-database
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";


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
  
// Mendapatkan referensi database dari Firebase
const db = getDatabase(app);

// Mendapatkan referensi dari elemen HTML tempat Anda ingin menampilkan data
const dataContainer = document.getElementById("dataContainer");

// Mendapatkan referensi dari database Firebase
const konsulRef = ref(db, 'daftarkonsul/');

// Mendengarkan perubahan pada database Firebase
onValue(konsulRef, (snapshot) => {
  // Mengosongkan container sebelum mengisi dengan data baru
  dataContainer.innerHTML = '';

  // Mengambil data dari snapshot
  const data = snapshot.val();

  // Jika tidak ada data, keluar dari fungsi
  if (!data) {
    return;
  }

  // Mengonversi objek data menjadi array
  const dataArray = Object.values(data);

  // Menampilkan data di dalam container
  dataArray.forEach((item) => {
    const listItem = document.createElement('div');
    listItem.innerHTML = `
      <p>Username: ${item.username}</p>
      <p>Tanggal: ${item.tanggal}</p>
      <p>Nama Dokter: ${item.NamaDokter}</p>
    `;
    dataContainer.appendChild(listItem);
  });
});

