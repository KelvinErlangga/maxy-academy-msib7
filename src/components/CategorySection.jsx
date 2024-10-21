"use client";
import MovieCard from "./MovieCard";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Fade, Slide } from "react-awesome-reveal";

export default function CategorySection({ movies, title, nextMovies, nextMoviesAgain }) {
  const [index, setIndex] = useState(0);
  const totalMovies = movies.length + nextMovies.length + nextMoviesAgain.length; // Total movies
  const totalGroups = Math.ceil(totalMovies / 6); // Tampilkan 6 kartu per slide

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % totalGroups);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + totalGroups) % totalGroups);
  };

  const displayMovies = [...movies, ...nextMovies, ...nextMoviesAgain];
  return (
    <section className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Fade direction="left" triggerOnce>
          {" "}
          <h2 className="text-light">{title}</h2>
        </Fade>
        <Fade direction="right" triggerOnce>
          {" "}
          <a href="#" className="text-light">
            Selengkapnya
          </a>
        </Fade>
      </div>
      <div className="position-relative">
        <Slide direction="up" triggerOnce>
          {" "}
          <Carousel activeIndex={index} onSelect={setIndex} indicators={false} controls={false}>
            {Array.from({ length: totalGroups }).map((_, i) => (
              <Carousel.Item key={i}>
                <div className="row">
                  {displayMovies.slice(i * 6, i * 6 + 6).map((movie) => (
                    <div className="col-6 col-md-4 col-lg-2" key={movie.id}>
                      <Fade triggerOnce delay={i * 100}>
                        {" "}
                        <MovieCard movie={movie} />
                      </Fade>
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Slide>
        <div
          className="position-absolute"
          style={{
            top: "40%",
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button onClick={handlePrev} className="btn" aria-label="Previous" style={{ marginLeft: "20px" }}>
            <span className="carousel-control-prev-icon" aria-hidden="true" />
          </button>
          <button onClick={handleNext} className="btn" aria-label="Next" style={{ marginRight: "20px" }}>
            <span className="carousel-control-next-icon" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
