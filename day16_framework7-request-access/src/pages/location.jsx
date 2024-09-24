import React, { useState } from "react";
import { Page, Navbar, Button, Card, CardContent } from "framework7-react";

// Menyimpan lokasi dalam state
const LocationPage = () => {
  const [location, setLocation] = useState("Belum diset lokasinya");

  // Mendapatkan lokasi pengguna
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Browser tidak mendukung geolocation");
    }
  };

  // Menampilkan koordinat saat lokasi didapatkan
  const showPosition = (position) => {
    const { latitude, longitude } = position.coords;
    setLocation(`Lintang: ${latitude} <br> Bujur: ${longitude}`);
  };

  return (
    <Page data-name="location" className="minimalist-page">
      <Navbar title="Location" className="minimalist-navbar" />
      <div className="page-content">
        <Card className="minimalist-block">
          <CardContent>
            <h2 className="card-title">Lokasi Anda</h2>
            <div id="lokasi" dangerouslySetInnerHTML={{ __html: location }} />
            <Button fill className="minimalist-button" onClick={getLocation}>
              Ambil Lokasi Saya Saat Ini
            </Button>
          </CardContent>
        </Card>
      </div>
    </Page>
  );
};

export default LocationPage;
