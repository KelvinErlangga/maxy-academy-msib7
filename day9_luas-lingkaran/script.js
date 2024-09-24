const lingkaran = {
  radius: null, // Menetapkan properti dengan nilai null
  luas: undefined, // luas diset ke undefined, akan diisi nanti
};

// Fungsi untuk menghitung luas lingkaran
function hitungLuas() {
  let radiusInput = document.getElementById("radius").value;

  // Validasi input, memeriksa apakah radiusInput kosong atau <= 0
  if (radiusInput === "" || radiusInput <= 0) {
    // Menggunakan var untuk menampilkan pesan error yang dapat berubah
    var errorMessage = "Jari-jari tidak valid!";
    document.getElementById("result").innerText = errorMessage;
    document.getElementById("result").classList.add("error");
    lingkaran.luas = undefined; // Tetap undefined jika terjadi error
    console.log("Error:", errorMessage);
    return;
  }

  // Ubah string input menjadi angka
  lingkaran.radius = parseFloat(radiusInput);
  const pi = 3.14;
  // Menghitung luas lingkaran dan menyimpannya ke dalam properti luas
  lingkaran.luas = pi * Math.pow(lingkaran.radius, 2);

  // Menampilkan hasilnya
  document.getElementById("result").innerText = `Luas Lingkaran: ${lingkaran.luas.toFixed(2)} cm²`;
  document.getElementById("result").classList.remove("error");

  // Debugging dengan menampilkan objek lingkaran di konsol
  console.log("Lingkaran Object:", lingkaran);
  console.debug("Radius:", lingkaran.radius, "Luas:", lingkaran.luas);
}

// Menambahkan event listener pada tombol hitung
document.getElementById("calculateBtn").addEventListener("click", hitungLuas);
