import React from 'react'
import '../../../src/css/App.css';
import hauntedHouseMock from './../../img/project-img/hauntedHouseMock.png'

function HauntedHouse() {
  return (
    <div className="project-detail-container">
      <div className="project-detail-text">
        <div className="tech-stack-list">
          <p>REACT <span>|</span> TEAM PROJECT <span>|</span> AGILE</p>
        </div>

        <div className="project-name">
          <h1>the haunted house game</h1>
        </div>

        <div className="project-small-description">
          <p>
          A "choose your own adventure" style game for the spooky season.
          </p>
          </div>
          <div className="project-long-description">
          <p>
          With my cohort, we built a fun game for Halloween! The player will start in the hallway and will need to select a room to search for the key.  They are met with an obstacle or task that they need to overcome to continue to search for the key.  Find the key, make your way back to the hallway and save your team! 
          </p>

          <p>
          We got to show off our creativity in storytelling and site design. We also wrote our own epic, features, and user stories.
          </p>
        
        </div>

        <div className="project-button-container">
          <div className="button">
            <a href="https://luceroweb.github.io/haunted-house-game/#/" target="_blank" rel="noreferrer">
              <button>
                <p className="playfair-roboto">view live</p>
              </button>
            </a>
          </div>

          <div className="button">
            <a href="https://github.com/luceroweb/haunted-house-game" target="_blank" rel="noreferrer">
              <button className="code-btn">
                <p className="playfair-roboto">view code</p>
              </button>
            </a>
          </div>

        </div>

      </div>
      <div className="project-image-container">
      <img className="project-photo" src={hauntedHouseMock} alt="laptop and cell phone with The Haunted House Game displayed on the screens" />
      </div>

    </div>
  )
}

export default HauntedHouse