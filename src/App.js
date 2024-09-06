import { useState } from "react";
import { StarsRating } from "./components/StarsRating";
import { WatchedMoviesList } from "./components/WatchedMoviesList";
import { MoviesList } from "./components/MoviesList";
import { WatchedSummary } from "./components/WatchedSummary";
import { Box } from "./components/Box";
import { Main } from "./components/Main";
import { NumResults } from "./components/NumResults";
import { InputSearch } from "./components/InputSearch";
import { Logo } from "./components/Logo";
import { NavBar } from "./components/NavBar";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

export const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
  // API KEY 8258bc4014fe46388c288dbe64bc5aee
  // https://newsapi.org/
  // https://newsapi.org/docs/get-started

  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [externalRating, setExternalRating] = useState(0);

  return (
    <>
      <NavBar>
        <Logo />
        <InputSearch />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <>
          <Box>
            <MoviesList movies={movies} />
          </Box>

          <Box>
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList watched={watched} />
            </>
          </Box>
        </>
      </Main>
      <StarsRating maxRating={2} messages={["fff", "ggg"]} />
      <StarsRating maxRating={10} />
      <StarsRating
        maxRating={20}
        color="red"
        size={25}
        colorStroke="white"
        defaultRating={3}
        onSetExternalRating={setExternalRating}
      />
      {externalRating}
    </>
  );
}
