import React from 'react';
import { Link } from 'react-router-dom';
import '../../../src/css/App.css';


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
        
        <Link to={"/projects/decidr"}>
          <img className="card" src={decidr} alt="decidr decision making app" />
        </Link>

        <Link to={"/projects/haunted-house"}>
          <img className="card" src={hauntedHouse} alt="The Haunted House Game choose your own adventure game" />
        </Link>

        <Link to={"/projects/magic-8ball"}>
          <img className="card" src={magic8Ball} alt="Harry Potter themed magic 8 ball project" />
        </Link>

        <Link to={"/projects/trivia-chill"}>
          <img className="card" src={triviaChill} alt="An art-deco designed movie trivia game" />
        </Link>

        <Link to={"/projects/w4b"}>
          <img className="card" src={w4b} alt="A Harry Potter Maurader's Map themed website" />
        </Link>
      </div>



    </main>
  )
}

export default ProjectMain