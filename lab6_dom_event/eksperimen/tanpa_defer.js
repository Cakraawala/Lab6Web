// Script ini dipanggil di <head> tanpa atribut defer.
// Saat baris ini dijalankan, browser belum membaca <body>,
// jadi elemen dengan id "judul" belum ada.

const judul = document.getElementById("judul");
console.log("Nilai judul:", judul); // hasilnya null

judul.textContent = "Belajar JavaScript DOM"; // error: Cannot set properties of null
