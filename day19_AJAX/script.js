const apiKey = "e872d065393af19b4b7448122588fced";

// Fungsi untuk mengambil data Weather dan menampilkannya
function getWeather() {
  const city = $("#city").val();
  if (!city) {
    $("#alert-box").text("Field Tidak Boleh Kosong").show();
    return;
  }
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;

  $.get(apiUrl, function (data) {
    if (data.cod === 200) {
      const tempCelcius = (data.main.temp - 273.15).toFixed(2);
      const currentDate = new Date().toLocaleDateString("id-ID");
      const time = new Date().toLocaleTimeString("id-ID");

      const weatherAccordion = `
        <h3>Weather in ${data.name}, ${data.sys.country}</h3>
        <div>
            <p>Date: ${currentDate}</p>
            <p>Time: ${time}</p>
            <p>Temperature: ${tempCelcius}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString("id-ID")}</p>
        </div>
      `;

      $("#weather-data").html(weatherAccordion);
      $("#weather-data").accordion();
      $("#alert-box").hide();
    } else {
      $("#alert-box").text("Nama Kota Tidak Valid").show();
    }
  });
}

// Simpan data ke penyimpanan lokal
function saveWeatherData(city, tempCelcius, weather, country) {
  const savedData = JSON.parse(localStorage.getItem("weatherData")) || [];
  savedData.push({ city, tempCelcius, weather, country });
  localStorage.setItem("weatherData", JSON.stringify(savedData));
  renderSavedData();
}

// Merender data cuaca yang disimpan dari penyimpanan lokal
function renderSavedData() {
  const savedData = JSON.parse(localStorage.getItem("weatherData")) || [];
  $("#savedWeatherData").html("");
  savedData.forEach((data, index) => {
    $("#savedWeatherData").append(`
      <li class="list-group-item text-white">
        ${data.city}, ${data.country} - ${data.tempCelcius}°C (${data.weather})
        <button class="btn btn-sm btn-danger float-end mx-2" onclick="deleteWeatherData(${index})">Delete</button>
      </li>
    `);
  });
}

// Hapus data cuaca spesifik
function deleteWeatherData(index) {
  const savedData = JSON.parse(localStorage.getItem("weatherData")) || [];
  savedData.splice(index, 1);
  localStorage.setItem("weatherData", JSON.stringify(savedData));
  renderSavedData();
}

// Fungsionalitas tombol Add
$("#add").on("click", function () {
  const city = $("#city").val();
  if (!city) {
    $("#alert-box").text("Field Tidak Boleh Kosong").show();
    return;
  }
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;

  $.get(apiUrl, function (data) {
    if (data.cod === 200) {
      const tempCelcius = (data.main.temp - 273.15).toFixed(2);
      const weather = data.weather[0].description;
      const country = data.sys.country;

      saveWeatherData(data.name, tempCelcius, weather, country);
    } else {
      $("#alert-box").text("Nama Kota Tidak Valid").show();
    }
  });
});

// Fungsi update (contoh: update item pertama)
$("#update").on("click", function () {
  const savedData = JSON.parse(localStorage.getItem("weatherData")) || [];
  if (savedData.length === 0) {
    alert("No data to update.");
    return;
  }
  const city = $("#city").val();
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;

  $.get(apiUrl, function (data) {
    if (data.cod === 200) {
      const tempCelcius = (data.main.temp - 273.15).toFixed(2);
      savedData[0] = { city: data.name, tempCelcius, weather: data.weather[0].description, country: data.sys.country };
      localStorage.setItem("weatherData", JSON.stringify(savedData));
      renderSavedData();
    } else {
      $("#alert-box").text("Nama Kota Tidak Valid").show();
    }
  });
});

// Fungsi patch (memperbarui sebagian data)
$("#patch").on("click", function () {
  const savedData = JSON.parse(localStorage.getItem("weatherData")) || [];
  if (savedData.length === 0) {
    alert("No data to patch.");
    return;
  }
  savedData[0].city = $("#city").val();
  localStorage.setItem("weatherData", JSON.stringify(savedData));
  renderSavedData();
});

// Hapus fungsionalitas (menghapus semua data yang disimpan)
$("#delete").on("click", function () {
  localStorage.removeItem("weatherData");
  renderSavedData();
});

// Inisialisasi rendering data yang disimpan
renderSavedData();

// Bind actions
$("#getWeather").on("click", getWeather);
