import React from 'react';
import '../css/App.css';
import grace from '../img/grace.JPG';

function Homepage() {
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
              <a href="https://drive.google.com/file/d/1A2iXGhzl5e_zhKXYGQa70EbrqobxErkF/view?usp=sharing" target="_blank" rel="noreferrer">
                <button>
                  <p className="playfair-roboto">view my resume</p>
                </button>
              </a>
            </div>

            <div className="social-icons">
              <a href="https://github.com/garanico" target="_blank" rel="noreferrer">
                <i className="fab fa-github-square"></i>
              </a>

              <a href="https://linkedin.com/in/gracearanico/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>

              <a href="https://instagram.com/gracieissoamzin" target="_blank" rel="noreferrer">
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