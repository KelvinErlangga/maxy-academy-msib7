// Array yang akan diubah menjadi object JSON
let myArray = ["Innova Zenix", "Mazda cx-9", "Ioniq 5", "Pajero Sport", "BMW 3 Series"];

// Conditional untuk memeriksa apakah array tidak kosong
if (myArray.length > 0) {
  // Mengubah array menjadi object dengan indeks array sebagai kunci
  let myObject = Object.assign({}, myArray);

  // Konversi object menjadi string JSON
  let jsonString = JSON.stringify(myObject);

  // Hasil konversi di konsol untuk debugging
  console.log("Array as JSON Object:", myObject);
  console.log("JSON String:", jsonString);
} else {
  console.log("Array kosong, tidak ada data untuk dikonversi.");
}
