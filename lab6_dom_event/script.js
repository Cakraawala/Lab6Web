// =====================================
// Latihan 1 - Mengubah teks dengan DOM
// =====================================
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");

judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";

console.log("Latihan 1: judul dan pesan sudah diubah");


// =====================================
// Latihan 2 - Event click
// =====================================
const tombol = document.getElementById("tombolAksi");

tombol.addEventListener("click", function () {
    pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString();
});


// =====================================
// Latihan 3 - Mengubah kelas dan gaya CSS
// =====================================
const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");
const kelasAktif = document.getElementById("kelasAktif");

// tampilkan kelas yang sedang aktif di paragraf
function tampilkanKelas() {
    if (teksGaya.className === "") {
        kelasAktif.textContent = "(tidak ada)";
    } else {
        kelasAktif.textContent = teksGaya.className;
    }
}

// toggle: kalau belum ada ditambah, kalau sudah ada dihapus
tombolGaya.addEventListener("click", function () {
    teksGaya.classList.toggle("highlight");
    teksGaya.classList.toggle("teks-besar");
    tampilkanKelas();
});

// add: hanya menambah, diklik berkali-kali tetap satu kelas
document.getElementById("tombolTambah").addEventListener("click", function () {
    teksGaya.classList.add("highlight", "teks-besar");
    tampilkanKelas();
});

// remove: hanya menghapus
document.getElementById("tombolHapus").addEventListener("click", function () {
    teksGaya.classList.remove("highlight", "teks-besar");
    tampilkanKelas();
});


// =====================================
// Latihan 4 - Event input dan penghitung karakter
// =====================================
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");

namaInput.addEventListener("input", function () {
    jumlahKarakter.textContent = namaInput.value.length;
});


// =====================================
// Latihan 5 - Validasi form pendaftaran
// =====================================
const form = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const usiaInput = document.getElementById("usia").value;
    const usia = Number(usiaInput);
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    pesanForm.className = "pesan-error";

    if (nama === "") {
        pesanForm.textContent = "Nama wajib diisi.";
    } else if (!polaEmail.test(email)) {
        pesanForm.textContent = "Masukkan email yang valid.";
    } else if (usiaInput === "" || !Number.isInteger(usia) || usia < 17 || usia > 100) {
        pesanForm.textContent = "Usia harus berupa bilangan bulat 17-100.";
    } else {
        pesanForm.className = "pesan-sukses";
        pesanForm.textContent = "Validasi berhasil. Form siap diproses.";
        form.reset();
    }
});


// =====================================
// Latihan 6 - Daftar tugas sederhana (To-do List)
// =====================================
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

tambahTugas.addEventListener("click", function () {
    const teks = inputTugas.value.trim();

    if (teks === "") {
        pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
        return;
    }

    const item = document.createElement("li");
    const label = document.createElement("span");
    const selesai = document.createElement("button");

    label.textContent = teks + " ";
    selesai.type = "button";
    selesai.textContent = "Tandai selesai";

    selesai.addEventListener("click", function () {
        item.classList.toggle("selesai");
        selesai.textContent = item.classList.contains("selesai")
            ? "Batalkan selesai" : "Tandai selesai";
    });

    item.append(label, selesai);
    daftarTugas.appendChild(item);

    inputTugas.value = "";
    pesanTugas.textContent = "Tugas ditambahkan.";
    inputTugas.focus();
});
