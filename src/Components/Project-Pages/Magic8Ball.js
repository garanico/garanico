import React from 'react';
import '../../../src/css/App.css';
import magic8BallMock from './../../img/project-img/magic8BallMock.png'

function Magic8Ball() {
  return (
    <div className="project-detail-container">
      <div className="project-detail-text">
        <div className="tech-stack-list">
        <p>JAVASCRIPT <span>|</span> HTML <span>|</span> CSS</p>
        </div>

        <div className="project-name">
          <h1>the prophecy</h1>
        </div>

        <div className="project-small-description">
          <p>
            A Harry Potter inspired take on a Magic 8 Ball. +2 points to Hufflepuff!
          </p>
          </div>
          <div className="project-long-description">
          <p>
            Inspired by the alluring glowing orbs in the Department of Mysteries from <a href="https://www.warnerbros.com/movies/harry-potter-and-order-phoenix" target="_blank" rel="noreferrer">Harry Potter and the Order of the Phoenix</a>, you&apos;ll get to type a question inside the box and the crystal ball will give you an answer in return.  
          </p>
          <p>
            I don&apos;t own the rights to Harry Potter, that&apos;s all JK Rowling and Warner Bros.  Please don&apos;t sue me. 
          </p>
        </div>

        <div className="project-button-container">
          <div className="button">
            <a href="https://garanico.github.io/javascript-final-project/" target="_blank" rel="noreferrer">
              <button>
                <p className="playfair-roboto">view live</p>
              </button>
            </a>
          </div>

          <div className="button">
            <a href="https://github.com/garanico/javascript-final-project" target="_blank" rel="noreferrer">
              <button className="code-btn">
                <p className="playfair-roboto">view code</p>
              </button>
            </a>
          </div>

        </div>

      </div>
      <div className="project-image-container">
      <img className="project-photo" src={magic8BallMock} alt="laptop with The Prophecy website displayed on the screens" />
      </div>

    </div>
  )
}

export default Magic8Ball