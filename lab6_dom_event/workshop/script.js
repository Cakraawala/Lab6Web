// Mini Project - Form Pendaftaran Workshop

const form = document.getElementById("formWorkshop");
const inputNama = document.getElementById("nama");
const inputEmail = document.getElementById("email");
const pilihSesi = document.getElementById("sesi");
const inputCatatan = document.getElementById("catatan");

const errorNama = document.getElementById("errorNama");
const errorEmail = document.getElementById("errorEmail");
const errorSesi = document.getElementById("errorSesi");
const pesanForm = document.getElementById("pesanForm");

const jumlahCatatan = document.getElementById("jumlahCatatan");
const ringkasNama = document.getElementById("ringkasNama");
const ringkasEmail = document.getElementById("ringkasEmail");
const ringkasSesi = document.getElementById("ringkasSesi");
const ringkasCatatan = document.getElementById("ringkasCatatan");

const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// 1. Ringkasan input langsung (event input)
function isiRingkasan(span, nilai) {
    // pakai textContent supaya input user tidak dibaca sebagai HTML
    span.textContent = nilai.trim() === "" ? "-" : nilai.trim();
}

inputNama.addEventListener("input", function () {
    isiRingkasan(ringkasNama, inputNama.value);
});

inputEmail.addEventListener("input", function () {
    isiRingkasan(ringkasEmail, inputEmail.value);
});

// 2. Penghitung karakter catatan
inputCatatan.addEventListener("input", function () {
    jumlahCatatan.textContent = inputCatatan.value.length;
    isiRingkasan(ringkasCatatan, inputCatatan.value);
});

// 3. Event change pada dropdown sesi
pilihSesi.addEventListener("change", function () {
    isiRingkasan(ringkasSesi, pilihSesi.value);
});


// 4. Validasi saat form disubmit
function tandaiSalah(input, elemenError, teks) {
    input.classList.add("salah");
    elemenError.textContent = teks;
}

function tandaiBenar(input, elemenError) {
    input.classList.remove("salah");
    elemenError.textContent = "";
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = inputNama.value.trim();
    const email = inputEmail.value.trim();
    const sesi = pilihSesi.value;
    let valid = true;

    if (nama === "") {
        tandaiSalah(inputNama, errorNama, "Nama wajib diisi.");
        valid = false;
    } else if (nama.length < 3) {
        tandaiSalah(inputNama, errorNama, "Nama minimal 3 karakter.");
        valid = false;
    } else {
        tandaiBenar(inputNama, errorNama);
    }

    if (email === "") {
        tandaiSalah(inputEmail, errorEmail, "Email wajib diisi.");
        valid = false;
    } else if (!polaEmail.test(email)) {
        tandaiSalah(inputEmail, errorEmail, "Format email tidak valid, contoh: nama@email.com");
        valid = false;
    } else {
        tandaiBenar(inputEmail, errorEmail);
    }

    if (sesi === "") {
        tandaiSalah(pilihSesi, errorSesi, "Pilih salah satu sesi workshop.");
        valid = false;
    } else {
        tandaiBenar(pilihSesi, errorSesi);
    }

    if (!valid) {
        pesanForm.className = "pesan-error";
        pesanForm.textContent = "Pendaftaran gagal, periksa kembali data yang ditandai merah.";
        return;
    }

    pesanForm.className = "pesan-sukses";
    pesanForm.textContent = "Terima kasih " + nama + ", pendaftaran untuk " + sesi + " berhasil.";
});


// 5. Tombol hapus input
function kosongkanForm() {
    form.reset();

    tandaiBenar(inputNama, errorNama);
    tandaiBenar(inputEmail, errorEmail);
    tandaiBenar(pilihSesi, errorSesi);

    jumlahCatatan.textContent = "0";
    ringkasNama.textContent = "-";
    ringkasEmail.textContent = "-";
    ringkasSesi.textContent = "-";
    ringkasCatatan.textContent = "-";

    pesanForm.className = "";
    pesanForm.textContent = "";
    inputNama.focus();
}

document.getElementById("tombolReset").addEventListener("click", kosongkanForm);
