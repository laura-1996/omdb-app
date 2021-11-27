import React, {useState, useEffect} from "react";
import '../App.css';

function EpisodeOverview(props) {  
  return (
      <section className="episode-overview">
          <div className="image-container image-1"></div>
          <div className="episode-overview-info d-flex row">
              <p className="episode-number">Episode 1 - 2011/04-17</p>
              <span className="rating">9/10</span>
          </div>
          <hr/>
          <div className="overview-title-section d-flex column">
              <h4 className="overview-title">Red Light, Green Light</h4>
              <p className="overview-plot">Hoping to win easy money, a broke and desperate Gi-hun agrees to take part in an enigmatic game. Not long into the first round, unforeseen horrors unfold.</p>
          </div>
      </section>
  )
}

export default EpisodeOverview;