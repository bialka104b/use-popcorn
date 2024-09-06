import { MovieInfo } from "./MovieInfo";

export function MoviesList({ movies }) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <li key={movie.imdbID}>
          <img src={movie.Poster} alt={`${movie.Title} poster`} />
          <h3>{movie.Title}</h3>
          <div>
            <MovieInfo emoji={"🗓"}>{movie.Year}</MovieInfo>
          </div>
        </li>
      ))}
    </ul>
  );
}
