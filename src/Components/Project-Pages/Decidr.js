import React from 'react';
import '../../../src/css/App.css';

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet tristique odio, nec lobortis ligula. Fusce at turpis pulvinar, condimentum orci nec, placerat tellus. Duis sed volutpat nisi, quis egestas velit. Praesent ultrices erat est, vel mattis leo vestibulum id. Nulla est lacus, euismod sed ultricies vulputate, blandit a neque. Praesent facilisis tellus sapien, vitae placerat lectus malesuada non. Praesent vitae diam risus
          </p>
        </div>

        <div className="project-button-container">
          <div className="button">
            <a href="" target="_blank" rel="noreferrer">
              <button>
                <p className="playfair-roboto">view live</p>
              </button>
            </a>
          </div>

          <div className="button">
            <a href="" target="_blank" rel="noreferrer">
              <button className="code-btn">
                <p className="playfair-roboto">view code</p>
              </button>
            </a>
          </div>

        </div>

      </div>
      <div className="project-image-container">
        
      </div>

    </div>
  )
}

export default Decidr