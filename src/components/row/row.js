import { useState, useEffect } from "react";
import "./row.css";
import instance from "../../services/axios";
const base_Url = "https://image.tmdb.org/t/p/original/";
const Row = ({ title, fetchUrl, largeRow }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${largeRow && "row__large"}`}
            src={`${base_Url}${
              largeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};
export default Row;
