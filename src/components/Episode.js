import React, {useState, useEffect} from "react";
import '../App.css';

function Episode(props) {  
  const [episode, setEpisode] = useState([]);
  
  const getEpisode = async () => {
    const apiKey = "979350";
    const apiEpisodes = `http://www.omdbapi.com/?t=squid+game&season=1&episode=${props.index+1}&apikey=${apiKey}`;
    const response = await fetch(apiEpisodes);
    const responseJson = await response.json();
    setEpisode(responseJson);
  };

  useEffect(() => {
    getEpisode();
  }, []);

  function handleClick(episode){
    const imageBgr = document.querySelector('.image-container');
    const episodeNumber = document.querySelector('.image-number');
    const rating = document.querySelector('.rating');
    const overviewitle = document.querySelector('.overview-title');
    const overviewPlot = document.querySelector('.overview-plot');
    const episodeNumberImg = document.querySelector(`.image-${episode.Episode}`);

    //imageBgr.setAttribute("class", "");
    //imageBgr.setAttribute("class", `episode image-${episode.Episode}`);
    //my idea was to substitute the innerText of these element with the one of the episode clicked
    //I can't access the elemnts though because I get an error about Cannot read properties of null (reading 'setAttribute')
    
    
  }

    return (
        <article className={`episode-container`} onClick={handleClick(`${episode}`)}>
            <div className={`episode image-${episode.Episode}`}>
            <div className="number">{episode.Episode}</div>
            </div>
            <h4 className="episode-title">{episode.Title}</h4>
            <p className="episode-plot">{episode.Plot}</p>
        </article>
    )
}

export default Episode;