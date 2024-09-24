import React, { useRef, useEffect, useState } from "react";
import { Page, Navbar, Button, f7 } from "framework7-react";

const CameraPage = () => {
  // Referensi elemen video, canvas, dan img untuk foto
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const photoRef = useRef(null);
  const fileInputRef = useRef(null);

  // State untuk menyimpan data foto
  const [photoData, setPhotoData] = useState(null);

  // Fungsi untuk mengambil foto dari video
  const takePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const photo = photoRef.current;

    // Atur ukuran canvas sesuai video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Ambil gambar dari video dan gambar di canvas
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0);

    // Ubah gambar canvas ke base64 dan simpan di state
    const data = canvas.toDataURL("image/webp");
    setPhotoData(data);
    photo.src = data;
  };

  // Menginisialisasi kamera dengan getUserMedia
  const startup = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        const video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(() => {
        alert("Browser tidak mendukung kamera");
      });
  };

  // Mengunggah dan menampilkan foto dari file
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const photo = photoRef.current;
        setPhotoData(reader.result);
        photo.src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  };

  // Memulai akses kamera saat komponen dimount
  useEffect(() => {
    if (navigator.mediaDevices) {
      startup();
    }
  }, []);

  // Menampilkan foto dalam fullscreen dialog
  const showPhotoInFullscreen = () => {
    if (photoData) {
      f7.dialog.create({
        title: "Your Photo",
        content: `<div style="text-align:center;">
                    <img src="${photoData}" style="max-width: 100%; height: auto;" alt="Captured Photo" />
                  </div>`,
        buttons: [{ text: "Close", bold: true }],
      }).open();
    }
  };

  return (
    <Page data-name="camera" className="minimalist-page">
      <Navbar title="Camera" className="minimalist-navbar" />
      <div className="page-content">
        <div className="camera-output-container">
          {/* Video elemen untuk stream kamera */}
          <div className="camera">
            <video ref={videoRef} id="video">Video stream not available</video>
            <Button fill onClick={takePhoto} style={{ marginTop: "10px" }}>Take Photo</Button>
            <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} style={{ marginTop: "10px" }} />
          </div>
          
          {/* Gambar hasil foto */}
          <div className="output" onClick={showPhotoInFullscreen} style={{ cursor: "pointer" }}>
            <img ref={photoRef} id="photo" alt="The screen capture will appear in this box." />
          </div>
        </div>
      </div>

      {/* Canvas tersembunyi untuk pemrosesan gambar */}
      <canvas ref={canvasRef} id="canvas" style={{ display: "none" }}></canvas>
    </Page>
  );
};

export default CameraPage;
