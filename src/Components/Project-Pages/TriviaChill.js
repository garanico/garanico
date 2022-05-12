import React from 'react';
import '../../../src/css/App.css';
import TriviaChillMock from './../../img/project-img/triviaChillMock.png'

function TriviaChill() {
  return (
    <div className="project-detail-container">
      <div className="project-detail-text">
        <div className="tech-stack-list">
          <p>REACT NATIVE <span>|</span> REDUX <span>|</span> AXIOS</p>
        </div>

        <div className="project-name">
          <h1>Trivia &amp; Chill</h1>
        </div>

        <div className="project-small-description">
          <p>
          A trivia game to test your movie knowledge
          </p>
          </div>
          <div className="project-long-description">
          <p>
          Using <a href="https://www.themoviedb.org/documentation/api" target="_blank" rel="noreferrer">The Movie Database API</a> this is a trivia game to test your movie knowledge. Random questions about popular movies could be shown as true/false or multiple choice. Answer correctly to increase your winning streak! If you get a wrong answer, then the game is over.  The player can choose between two different game modes to change the difficulty of the game.
          </p>
        </div>

        <div className="project-button-container">
          <div className="button">
            <a href="https://luceroweb.github.io/trivia-and-chill/" target="_blank" rel="noreferrer">
              <button>
                <p className="playfair-roboto">view live</p>
              </button>
            </a>
          </div>

          <div className="button">
            <a href="https://github.com/luceroweb/trivia-and-chill" target="_blank" rel="noreferrer">
              <button className="code-btn">
                <p className="playfair-roboto">view code</p>
              </button>
            </a>
          </div>

        </div>

      </div>
      <div className="project-image-container">
      <img className="project-photo" src={TriviaChillMock} alt="laptop and cell phone with the Trivia &amp; Chill displayed on the screens" />
      </div>

    </div>
  )
}

export default TriviaChill