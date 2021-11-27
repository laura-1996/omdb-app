import React, { useState, useEffect } from "react";
import "./App.css";
import Episode from "./components/Episode";
import EpisodeOverview from "./components/EpisodeOverview";

function App() {
  const apiKey = "979350";
  const [series, setSeries] = useState([]);
  const [season, setSeason] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  const getSeries = async () => {
    const apiSeries = `http://www.omdbapi.com/?t=squid+game&apikey=${apiKey}`;
    const response = await fetch(apiSeries);
    const responseJson = await response.json();
    setSeries(responseJson);
  };

  useEffect(() => {
    getSeries();
  }, []);

  const getEpisodes = async () => {
    const apiEpisodes = `http://www.omdbapi.com/?t=squid+game&season=1&apikey=${apiKey}`;
    const response = await fetch(apiEpisodes);
    const responseJson = await response.json();
    setSeason(responseJson);
    setEpisodes(responseJson.Episodes);
  };

  useEffect(() => {
    getEpisodes();
  }, []);

  return (
    <div className="d-flex row" id="app">
      <div className="app-container">
        <div className="d-flex season-info column">
          <h1 className="season-title">Season {season.Season}</h1>
          <h2 className="movie-title">{series.Title}</h2>
          <p className="movie-description">{series.Plot}</p>
        </div>
        <div className="episodes-container d-flex row">
          {episodes.map((episode, index) => (
            <Episode index={index} />
          ))}
        </div>
      </div>
      <EpisodeOverview />
    </div>
  );
}

export default App;
