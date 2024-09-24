<?php
// Konfigurasi database
$host = "localhost";
$username = "root";
$password = "";
$db = "day8";

// Membuat koneksi ke MySQL
$conn = new mysqli($host, $username, $password, $db);

// Cek koneksi
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
