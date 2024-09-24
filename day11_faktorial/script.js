function hitungFaktorial() {
  let numberInput = document.getElementById("radius").value;

  // Validasi input, memeriksa apakah input kosong atau < 0
  if (numberInput === "" || numberInput < 0) {
    var errorMessage = "Angka tidak valid! Masukkan angka >= 0.";
    document.getElementById("result").innerText = errorMessage;
    document.getElementById("result").classList.add("error");
    return;
  }

  // Ubah string input menjadi angka
  let number = parseInt(numberInput);

  // Menghitung faktorial
  let faktorial = 1;
  for (let i = 1; i <= number; i++) {
    faktorial *= i;
  }

  // Menampilkan hasil
  document.getElementById("result").innerText = `Faktorial dari ${number} adalah: ${faktorial}`;
  document.getElementById("result").classList.remove("error");

  // Debugging dengan menampilkan hasil faktorial di konsol
  console.log("Faktorial:", faktorial);
}

// Event listener pada tombol hitung
document.getElementById("calculateBtn").addEventListener("click", hitungFaktorial);
