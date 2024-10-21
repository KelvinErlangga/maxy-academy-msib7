"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  const [navbarFixed, setNavbarFixed] = useState(false);

  // Menggunakan useEffect untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarFixed(true);
      } else {
        setNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg p-4 ${navbarFixed ? "navbar-fixed" : ""}`}>
      <div className="container">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <Image src="/logo.png" alt="Cinevibes" width={90} height={40} className="img-fluid" priority={true} />
        </Link>

        <div className="position-relative ms-4 flex-grow-1">
          <input type="search" className="form-control rounded-pill pe-5" placeholder="Cari Film..." aria-label="Cari Film" />
          <FaSearch className="position-absolute top-50 end-0 translate-middle-y me-3" style={{ cursor: "pointer", color: "#888" }} />
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setNavbarOpen(!navbarOpen)}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className="nav-link me-2">
                Beranda
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/my-movies" className="nav-link me-2">
                Film Saya
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blog" className="nav-link">
                Blog
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn btn-outline-light me-3 rounded-pill">Daftar</button>
            <button className="btn btn-masuk rounded-pill">Masuk</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
