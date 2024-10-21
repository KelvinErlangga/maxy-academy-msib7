import { getMovieList, nowPlayingMovie, topRatedMovie, upcomingMovie } from "../utils/fetchMovies";
import CategorySection from "../components/CategorySection";

export default async function Home() {
  const popularMovies = await getMovieList();
  const nowPlaying = await nowPlayingMovie();
  const topRated = await topRatedMovie();
  const upcomingMovies = await upcomingMovie();

  return (
    <div>
      <CategorySection title="Popular Movies" movies={popularMovies} nextMovies={nowPlaying} nextMoviesAgain={topRated} />
      <CategorySection title="Now Playing" movies={nowPlaying} nextMovies={topRated} nextMoviesAgain={popularMovies} />
      <CategorySection title="Top Rated" movies={topRated} nextMovies={popularMovies} nextMoviesAgain={nowPlaying} />
      <CategorySection title="Upcoming Movies" movies={upcomingMovies} nextMovies={popularMovies} nextMoviesAgain={nowPlaying} />
    </div>
  );
}
