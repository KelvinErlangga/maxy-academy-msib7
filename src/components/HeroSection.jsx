"use client";
import { Carousel } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

const MovieCarousel = ({ movies, baseImgUrl }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fungsi untuk memotong overview
  const truncateOverview = (overview) => {
    if (!overview) return "Description not available";
    const maxLines = 3;
    const lineHeight = 1.5;
    const maxHeight = `${maxLines * lineHeight}em`;

    // Jika panjang overview lebih dari maxHeight, tambahkan '...'
    return (
      <div className="overview" style={{ maxHeight }}>
        {overview}
        {overview.split(" ").length > 20 && <span>...</span>}
      </div>
    );
  };

  return (
    <div className="mt-3">
      <Carousel indicators interval={3000} className="carousel slide" style={{ padding: "0 5%" }}>
        {movies.map((movie) => (
          <Carousel.Item key={movie.id} className="rounded-3 overflow-hidden">
            <Link href={`/detail/${movie.id}`}>
              <div className="carousel-item-container">
                <Fade triggerOnce>
                  <Image src={movie.backdrop_path ? `${baseImgUrl}/${movie.backdrop_path}` : ""} alt={movie.title} layout="fill" objectFit="cover" quality={100} className="rounded-3" />
                </Fade>
                <div className="carousel-caption text-start">
                  <Fade duration={1000} triggerOnce>
                    <h2 className="text-4xl font-bold mb-2">{movie.title}</h2>
                  </Fade>
                  <Fade duration={1000} delay={200} triggerOnce>
                    <p className="text-xl">
                      {movie.release_date} <span className="ml-3">{movie.vote_average}⭐</span>
                    </p>
                  </Fade>
                  {isClient && (
                    <Fade duration={1000} delay={400} triggerOnce>
                      <p className="mt-3">{window.innerWidth >= 768 ? truncateOverview(movie.overview) : null}</p>
                    </Fade>
                  )}
                </div>
              </div>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default MovieCarousel;
