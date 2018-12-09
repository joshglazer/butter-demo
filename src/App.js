import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Router, IndexRoute, Route } from 'react-router';

import Home from './components/Home'
import Blog from './components/Blog'
import Contact from './components/Contact'

import Butter from 'buttercms';
const butter = Butter('5c195e1e7759c417b1c4006b302ac52cb0d87f37');


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPosts: []
    }
  }

  componentWillMount() {
    butter.post.list({page: 1, page_size: 10}).then((response) => {
      console.log(response);
      console.log('--------');
      this.setState({blogPosts: response.data.data});
    })
  }

  renderBlogPosts() {
    if (this.state.blogPosts) {
      console.log(this.state.blogPosts);
      return this.state.blogPosts.map((data) => {
        return (
          <article key={data.url}>
            <h2>{data.title}</h2>
            <div dangerouslySetInnerHTML={{__html: data.body}} />
          </article>
        );
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My Butter Blog</h1>
        </header>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
        </Router>
        {this.renderBlogPosts()}
        <footer className="App-footer">
          <div>
            Powered by <a className='App-link' href='https://buttercms.com/' target='_blank'>ButterCMS</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
