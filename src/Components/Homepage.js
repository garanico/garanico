import React from 'react';

//css files
import '../css/layout.css';
// import darkModeCSS from '../css/darkMode.css';
// import lightModeCSS from '../css/lightMode.css';
import grace from '../img/grace.JPG';

function Homepage({ checked }) {
  return (
    <main id="homepage">
      <section className="container-1">

      <div className="intro-photo">
        <img className="photo" src={grace} alt="Grace Aranico's headshot" />
      </div>

        <div className="intro-text">
          <div className="oh-hey">
            <p>Oh hey!</p>
          </div>
          <h1 className="font-playfair">I'm Grace</h1>
          <p>A Front-End Web Developer passionate about creating digital experiences that are equal parts functional and beautiful.</p>


          <div className="contact-links">
            <div className="button">
              <button>
                view my resume
              </button>
            </div>

            <div className="social-icons">
              <a href="https://github.com/garanico" target="_blank" rel="noopener">
                <i className="fab fa-github-square"></i>
              </a>

              <a href="https://linkedin.com/in/gracearanico/" target="_blank" rel="noopener">
                <i className="fab fa-linkedin"></i>
              </a>

              <a href="https://instagram.com/gracieissoamzin" target="_blank" rel="noopener">
                <i className="fab fa-instagram"></i>
              </a>  
            </div>
          </div>

        </div>



      </section>

      <div>


      </div>
      
    </main>
  )
}

export default Homepage