import React from 'react'
import { Link } from "react-router-dom"
import HelloTime from "./HelloTime"
import memePicture from "../Files/smart.png"
import paperplane from "../Files/paperplane.png"
import coverletter from "../Files/coverletter.png"
import person from "../Files/person.png"

function Home() {
  return (
    <div className="Home">
      <div className="HomeContainers">
        <h1><HelloTime />- welcome to my website!</h1>
        <p>My name is Jonatan Seger and this website is created with React. The
         sole purpose of this project is to learn more about React. I'll present
        myself throughout your stay here.</p>
      </div>
      <Link to="/resume" className="HomeContainers">
        <h2>Resumé</h2>
        <img className="homePictures" src={person} width="70" height="70" />
        <p>I believe that this website is an exciting way of distributing my resumé.
        Click here or navigate to "RESUMÈ" to find out more.
        Pdfs are provided as well.</p>
      </Link>
      <Link to="/coverletter" className="HomeContainers">
        <h2>Cover Letter</h2>
        <img className="homePictures" src={coverletter} width="100" height="100" />
        <p>Cover Letter aims at giving you a short intro of who I am and what I
        want to achieve. Route to about me goes here</p>
      </Link>
      <Link to="/contact" className="HomeContainers">
      <h2>Contact</h2>
        <img className="homePictures" src={paperplane} width="100" height="100" />
        <p>Please use the form here to contact me. Route to Contact goes here</p>
      </Link>
      <Link to="memegen" className="HomeContainers">
        <h2>Meme Generator</h2>
        <img className="homePictures" src={memePicture} width="100" height="100" />
        <p>Why I have a Meme generator? - to enhance your experience during
        your stay here. Route to MemeGen goes here</p>
      </Link>
      <footer>No rights reserved.</footer>
    </div>
  )
}

export default Home;
