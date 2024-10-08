import { useEffect, useState } from "react";
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

const MY_KEY = "1ac9e4cb";
const selectedId = "tt3896198";

export default function App() {
  // API KEY 8258bc4014fe46388c288dbe64bc5aee
  // https://newsapi.org/
  // https://newsapi.org/docs/get-started

  // http://www.omdbapi.com/?i=tt3896198&apikey=1ac9e4cb

  const [errorMessage, setErrorMessage] = useState("");
  const [externalRating, setExternalRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState(tempMovieData);
  const [query, setQuery] = useState("interstellar");
  const [watched, setWatched] = useState(tempWatchedData);
  const [selectedId, setSelectedId] = useState("null");
  const tempQuery = "interstellar";

  useEffect(() => {
    async function getMovieAPI() {
      try {
        setIsLoading(true);
        setErrorMessage("");

        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${MY_KEY}&i=${selectedId}&s=${query}
      `
          // ,
          // { signal: controller.signal }
        );

        if (!response.ok)
          throw new Error("Something went wrong with fetching movies");

        const data = await response.json();
        if (data.Response === "False") throw new Error("Movie not found");

        setMovies(data.Search);
        setErrorMessage("");
      } catch (error) {
        if (error.name !== "AbortError") {
          console.log(error.message);
        }
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setErrorMessage("");
      return;
    }
    getMovieAPI();
  }, [query]);

  return (
    <>
      <NavBar>
        <Logo />
        <InputSearch query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <>
          <Box>
            {isLoading && <Loader />}
            {!isLoading && !errorMessage && <MoviesList movies={movies} />}
            {errorMessage && <ErrorMessage />}
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

function Loader() {
  return <div className="loader">Loader</div>;
}
function ErrorMessage() {
  return <div className="error">Error</div>;
}
