import localFont from "next/font/local";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import { getMovieList } from "../utils/fetchMovies";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Cinevibes: Ratings, Review, and Where to Watch the Best Movies & TV Shows",
  description: "Browse movies using The Movie Database API",
};

export default async function RootLayout({ children }) {
  const popularMovies = await getMovieList();
  const baseImgUrl = process.env.NEXT_PUBLIC_BASEIMGURL;

  return (
    <html lang="en">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <HeroSection movies={popularMovies} baseImgUrl={baseImgUrl} />
        <div className="container">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
