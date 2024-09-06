import { MovieInfo } from "./MovieInfo";

export function WatchedMovie({ movie }) {
  return (
    <li>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <MovieInfo emoji={"⭐️"}>{movie.imdbRating}</MovieInfo>
        <MovieInfo emoji={"🌟"}>{movie.userRating}</MovieInfo>
        <MovieInfo emoji={"⏳"}>{movie.runtime} min</MovieInfo>
      </div>
    </li>
  );
}
