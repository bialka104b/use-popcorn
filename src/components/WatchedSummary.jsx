import { MovieInfo } from "./MovieInfo";
import { average } from "../App";

export function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <MovieInfo emoji={"#️⃣"}>{watched.length} movies</MovieInfo>
        <MovieInfo emoji={"⭐️"}>{avgImdbRating}</MovieInfo>
        <MovieInfo emoji={"🌟"}>{avgUserRating}</MovieInfo>
        <MovieInfo emoji={"⏳"}>{avgRuntime} min</MovieInfo>
      </div>
    </div>
  );
}
