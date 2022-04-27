import React from 'react'
import '../App.css';
import grace from '../img/grace.JPG';


function About() {
  return (
    <div id="about">
        <div className="about-me">
          <div className="about-text">
            <h1 className="font-playfair">about me</h1>
            
            <p>
              I'm a front-end developer with a background in digital marketing and project management.  My 10+ years in digital marketing has shaped how I approach programming.
            </p>

            <p>
              It's important to me that technology nurtures community, inclusivity, and knowledge.  My goal is to make beautifully designed applications that create meaningful change in people's lives.
            </p>

            <p>
              Outside of coding, you can find me spending time with my family, my pup Bruno, and exploring new skills.  My latest venture is learning how to skateboard.
            </p>
            

            <button>view my resume</button>
          </div>

          <div className="about-photo">
            <img className="about-photo" src={grace} alt="Grace Aranico's headshot" />
          </div>
        </div>



    
    </div>
  )
}

export default About