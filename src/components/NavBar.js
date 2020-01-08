import React, { Component } from "react"
import { Link } from "react-router-dom"

class NavBar extends Component  {
  constructor() {
    super()
  }

  render() {
    return (
      <div id="HeaderNavigation">
        <label for="hamburger">&#9776;</label>
        <input type="checkbox" id="hamburger" />
        <ul>
          <li><Link to="/" className="HeaderNavigationButton">HOME</Link></li>
          <li><Link to="/resume" className="HeaderNavigationButton">RESUMÈ</Link></li>
          <li><Link to="/coverletter" className="HeaderNavigationButton">COVER LETTER</Link></li>
          <li><Link to="/contact" className="HeaderNavigationButton">CONTACT</Link></li>
          <li><Link to="memegen" className="HeaderNavigationButton">MEME GENERATOR</Link></li>
        </ul>
      </div>
    )
  }
}

export default NavBar
