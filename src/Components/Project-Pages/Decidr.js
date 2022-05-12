import React from 'react';
import '../../../src/css/App.css';
import decidrMock from './../../img/project-img/decidrMock.png'


function Decidr() {
  return (

    <div className="project-detail-container">
      <div className="project-detail-text">
        <div className="tech-stack-list">
          <p>REACT <span>|</span> RESPONSIVE DESIGN</p>
        </div>

        <div className="project-name">
          <h1>decidr.</h1>
        </div>

        <div className="project-small-description">
          <p>
            A simple React app to make a decision when your brain just can't anymore.
          </p>
          </div>
          <div className="project-long-description">
          <p>
          Can’t decide what to eat tonight?  Or a name for your dog?  No worries!  Enter in your list of options and the app will decide for you by selecting a random option from the list.  
          </p>
        </div>

        <div className="project-button-container">
          <div className="button">
            <a href="https://garanico.github.io/decidr-app/" target="_blank" rel="noreferrer">
              <button>
                <p className="playfair-roboto">view live</p>
              </button>
            </a>
          </div>

          <div className="button">
            <a href="https://github.com/garanico/decidr-app" target="_blank" rel="noreferrer">
              <button className="code-btn">
                <p className="playfair-roboto">view code</p>
              </button>
            </a>
          </div>

        </div>

      </div>
      <div className="project-image-container">
        <img className="project-photo" src={decidrMock} alt="laptop and cell phone with the Decidr app displayed on the screens" />
        
      </div>

    </div>
  )
}

export default Decidr