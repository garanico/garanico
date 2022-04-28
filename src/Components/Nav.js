import React from 'react'
import { Link } from 'react-router-dom';
//css files
import '../css/layout.css';
import '../css/darkMode.css';

function Nav() {
  return (

    <nav id="navbar">
        <div className="logo-container font-playfair">
          <Link className="link" to={"/"}>
            g.
          </Link>
        </div>
        <div className="nav-links">
            <Link to={"/"}>
              home
            </Link>

            <Link to={"about"}>
              about
            </Link>

            <Link to={"projects"}>
              projects
            </Link>   
        </div>
    </nav>
  )
}

export default Nav