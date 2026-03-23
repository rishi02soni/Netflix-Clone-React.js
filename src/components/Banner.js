import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner_contents">
        <h1>{movie?.title || movie?.name}</h1>
        <p>{movie?.overview}</p>
      </div>
    </header>
  );
}

export default Banner;
