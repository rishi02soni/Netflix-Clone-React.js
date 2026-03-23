import React from "react";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Row from "../components/Row";
import requests from "../requests";

function HomeScreen() {
  return (
    <div>
      <NavBar />
      <Banner />

      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
    </div>
  );
}

export default HomeScreen;
