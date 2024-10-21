export default function Footer() {
  return (
    <footer className="text-light py-4 border-top w-full">
      <div className="container">
        <div className="row">
          {/* Perusahaan Section */}
          <div className="col-md-3">
            <img src="/logo.png" alt="Perusahaan Logo" width="150" className="mb-4" />
            <ul className="list-unstyled">
              <li className="mb-3">
                <a href="#" className="text-light">
                  Tentang Cinevibes
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-light">
                  Syarat Pengguna
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-light">
                  Kebijakan Privasi
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-light">
                  Masukan
                </a>
              </li>
            </ul>
          </div>

          {/* Butuh Bantuan Section */}
          <div className="col-md-3">
            <h5 className="mb-4">Butuh bantuan?</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <a href="#" className="text-light">
                  Pusat Bantuan
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="col-md-3">
            <h5 className="mb-4">Newsletter</h5>
            <p className="mb-3">Mau terhubung terus dengan kami? Isi emailmu di bawah sini ya</p>
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Masukkan Email" />
              <button className="btn btn-primary" type="button">
                Subscribe
              </button>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="col-md-3 text-center">
            <h5 className="mb-4">Terhubung dengan Kami</h5>

            {/* Ikon Media Sosial */}
            <ul className="list-inline mb-4">
              <li className="list-inline-item me-4">
                <a href="#" className="text-light">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item me-4">
                <a href="#" className="text-light">
                  <i className="fab fa-tiktok"></i>
                </a>
              </li>
              <li className="list-inline-item me-4">
                <a href="#" className="text-light">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li className="list-inline-item me-4">
                <a href="#" className="text-light">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item me-4">
                <a href="#" className="text-light">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-light">
                  <i className="fab fa-telegram"></i>
                </a>
              </li>
            </ul>

            {/* Tautan Google Play dan App Store */}
            <div className="d-flex justify-content-center mt-3">
              <a href="#" className="me-2">
                <img src="https://freelogopng.com/images/all_img/1664287128google-play-store-logo-png.png" alt="Google Play" width="120" />
              </a>
              <a href="#">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="App Store" width="120" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="mt-4">&copy; 2024 Cinevibes dan semua perusahaan terkait. Hak cipta dilindungi undang-undang.</p>
        </div>
      </div>
    </footer>
  );
}
