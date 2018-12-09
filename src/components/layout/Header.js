import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <h1>My Butter Blog</h1>
        <nav>
          <ul>
            <li><Link to='/' className="App-link">Blog</Link></li>
            <li><Link to='/about-me' className="App-link">About Me</Link></li>
            <li><Link to='/contact' className="App-link">Contact</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}
