import Image from "next/image";
import { useState } from "react";

export default function MovieCard({ movie }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="card shadow-lg position-relative overflow-hidden border-0 rounded-3" style={{ height: "100%", cursor: "pointer" }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="position-relative" style={{ height: "100%" }}>
        {/* Movie Poster */}
        <Image src={`${process.env.NEXT_PUBLIC_BASEIMGURL}${movie.poster_path}`} alt={movie.title} layout="responsive" width={144} height={216} />

        {/* Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-3 text-white"
          style={{
            backgroundColor: isHovered ? "rgba(0, 0, 0, 0.75)" : "rgba(0, 0, 0, 0)",
            opacity: isHovered ? 1 : 0,
            transition: "background-color 0.3s ease-in-out, opacity 0.3s ease-in-out",
          }}
        >
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">
            Release Date: <strong>{movie.release_date}</strong>
          </p>
          <p className="card-text">
            <span className="badge bg-success">Rating: {movie.vote_average}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
