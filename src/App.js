import React, { Component } from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'

import './App.css'
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Resume from "./components/Resume"
import CoverLetter from "./components/CoverLetter"
import Contact from "./components/Contact"
import MemeGen from "./components/ScrimbaMemeGen"
import { CSSTransition, TransitionGroup } from "react-transition-group"

class App extends Component {
  render() {
  window.scrollTo(0, 0)
  return (
      <div>
        <Header />
        <NavBar />

        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={300}
              classNames="fade"
            >
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/resume" component={Resume} />
                <Route path="/coverletter" component={CoverLetter} />
                <Route path="/contact" component={Contact} />
                <Route path="/memegen" component={MemeGen} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </div>
  )
  }
}

export default App
