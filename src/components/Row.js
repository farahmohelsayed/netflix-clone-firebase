import { useEffect, useState } from "react";
import axios from "../axios";
import styles from "./Row.module.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const image_base_url = "https://image.tmdb.org/t/p/original/";
const Row = ({ title, fetchURL, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchURL);
      console.log("Response: ", response.data.results);
      setMovies(response.data.results);
      return response;
    }
    fetchData();
  }, [fetchURL]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title|| "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
       //   console.log(url)

        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className={styles.row}>
      <h2 className={styles.rowTitle}>{title}</h2>
      <div className={`${styles.rowPosters} `}>
        {/* posters */}
        {movies.map((movie) => (
          <img
            onClick={()=>handleClick(movie)}
            key={movie.id}
            className={`${styles.rowPoster} ${
              isLargeRow && styles.rowPostersLarge
            }`}
            src={`${image_base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl &&<YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};
export default Row;
