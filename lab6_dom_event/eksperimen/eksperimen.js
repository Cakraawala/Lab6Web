// =====================================
// Eksperimen 1 - Tombol hapus pada To-do List
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
    const hapus = document.createElement("button");

    label.textContent = teks + " ";

    selesai.type = "button";
    selesai.textContent = "Tandai selesai";
    selesai.addEventListener("click", function () {
        item.classList.toggle("selesai");
        selesai.textContent = item.classList.contains("selesai")
            ? "Batalkan selesai" : "Tandai selesai";
    });

    // tombol hapus: menghapus elemen li dari daftar
    hapus.type = "button";
    hapus.textContent = "Hapus";
    hapus.className = "tombol-hapus";
    hapus.addEventListener("click", function () {
        item.remove();
        pesanTugas.textContent = "Tugas \"" + teks + "\" dihapus.";
    });

    item.append(label, selesai, hapus);
    daftarTugas.appendChild(item);

    inputTugas.value = "";
    pesanTugas.textContent = "Tugas ditambahkan.";
    inputTugas.focus();
});


// =====================================
// Eksperimen 2 - Nama minimal 3 karakter
// =====================================
const formNama = document.getElementById("formNama");
const pesanNama = document.getElementById("pesanNama");

formNama.addEventListener("submit", function (event) {
    event.preventDefault();
    const nama = document.getElementById("nama").value.trim();

    if (nama === "") {
        pesanNama.className = "pesan-error";
        pesanNama.textContent = "Nama wajib diisi.";
    } else if (nama.length < 3) {
        pesanNama.className = "pesan-error";
        pesanNama.textContent = "Nama minimal terdiri dari 3 karakter (sekarang " + nama.length + ").";
    } else {
        pesanNama.className = "pesan-sukses";
        pesanNama.textContent = "Nama valid.";
    }
});


// =====================================
// Eksperimen 3 - Event change pada dropdown
// =====================================
const sesi = document.getElementById("sesi");
const sesiTerpilih = document.getElementById("sesiTerpilih");

sesi.addEventListener("change", function () {
    if (sesi.value === "") {
        sesiTerpilih.textContent = "belum ada";
    } else {
        sesiTerpilih.textContent = sesi.value;
    }
});


// =====================================
// Eksperimen 4 - Hide / show paragraf dengan class CSS
// =====================================
const tombolToggle = document.getElementById("tombolToggle");
const paragrafInfo = document.getElementById("paragrafInfo");

tombolToggle.addEventListener("click", function () {
    paragrafInfo.classList.toggle("tersembunyi");

    if (paragrafInfo.classList.contains("tersembunyi")) {
        tombolToggle.textContent = "Tampilkan Paragraf";
    } else {
        tombolToggle.textContent = "Sembunyikan Paragraf";
    }
});
