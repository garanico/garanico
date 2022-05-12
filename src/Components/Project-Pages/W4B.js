import React from 'react';
import '../../../src/css/App.css';
import wb4Mock from './../../img/project-img/wb4Mock.png'

function W4B() {
  return (
    <div className="project-detail-container">
      <div className="project-detail-text">
        <div className="tech-stack-list">
          <p>HTML <span>|</span> CSS</p>
        </div>

        <div className="project-name">
          <h1>my first website</h1>
        </div>

        <div className="project-small-description">
          <p>
          A fun throwback to the first website I've ever built!
          </p>
          </div>
          <div className="project-long-description">
          <p>
          This is the site that started it all and a great reminder of how far I&apos;ve come. Definitely a step up from when I was a teenager trying to code by changing my <a href="https://myspace.com/" target="_blank" rel="noreferrer">Myspace</a> profile! Can you find the hidden easter egg? 
          </p>
          <p>
          I don&apos;t own the rights to Harry Potter, that&apos;s all JK Rowling and Warner Bros.  Please don&apos;t sue me. 
          </p>
        </div>

        <div className="project-button-container">
          <div className="button">
            <a href="https://garanico.github.io/w4b-final-project/" target="_blank" rel="noreferrer">
              <button>
                <p className="playfair-roboto">view live</p>
              </button>
            </a>
          </div>

          <div className="button">
            <a href="https://github.com/garanico/w4b-final-project" target="_blank" rel="noreferrer">
              <button className="code-btn">
                <p className="playfair-roboto">view code</p>
              </button>
            </a>
          </div>

        </div>

      </div>
      <div className="project-image-container">
      <img className="project-photo" src={wb4Mock} alt="laptop with my first website displayed on the screen" />
      </div>

    </div>
  )
}

export default W4B