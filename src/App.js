import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/layout/Header'

import Home from './components/Home'
import Blog from './components/Blog'
import Contact from './components/Contact'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPosts: []
    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/blog" component={Blog} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </BrowserRouter>
        <footer className="App-footer">
          <div>
            Powered by <a className='App-link' href='https://buttercms.com/' rel="noopener noreferrer" target='_blank'>ButterCMS</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
