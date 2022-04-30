import React from 'react'

//css files
import '../../../src/css/layout.css';
// import darkModeCSS from  '../../../src/css/darkMode.css';

//images
import decidr from '../../img/project-img/decidr.png';
import hauntedHouse from '../../img/project-img/haunted-house.png'
import magic8Ball from '../../img/project-img/magic8-ball.png'
import triviaChill from '../../img/project-img/trivia-chill.png'
import w4b from '../../img/project-img/w4b.png'

function ProjectMain({ checked }) {
  return (
    <main id="projects">
      <div className="project-heading">
        <p>take a look at my</p>
        <h1 className="font-playfair">projects</h1>
      </div>

      <div className="card-container">
        <div className="card-subtitle">
          <p>click on any project to learn more!</p>
        </div>
        
        <a href="https://garanico.github.io/decidr-app/" rel="noopener">
          <img className="card" src={decidr} alt="decidr decision making app" />
        </a>

        <a href="https://luceroweb.github.io/haunted-house-game/#/" rel="noopener">
          <img className="card" src={hauntedHouse} alt="The Haunted House Game choose your own adventure game" />
        </a>

        <a href="https://garanico.github.io/javascript-final-project/" rel="noopener">
          <img className="card" src={magic8Ball} alt="Harry Potter themed magic 8 ball project" />
        </a>

        <a href="https://garanico.github.io/decidr-app/" rel="noopener">
          <img className="card" src={triviaChill} alt="An art-deco designed movie trivia game" />
        </a>

        <a href="https://garanico.github.io/w4b-final-project/" rel="noopener">
          <img className="card" src={w4b} alt="A Harry Potter Maurader's Map themed website" />
        </a>

        <a href="https://garanico.github.io/decidr-app/" rel="noopener">
          <img className="card" src={decidr} alt="decidr decision making app" />
        </a>



      </div>



    </main>
  )
}

export default ProjectMain