import React, { Component } from 'react';
import Butter from 'buttercms'

const butter = Butter('5c195e1e7759c417b1c4006b302ac52cb0d87f37');

class Blog extends Component {

  constructor(props) {
    super(props);

    this.state = {
      blogPosts: null
    };
  }

  componentWillMount() {
    butter.post.list({page: 1, page_size: 10}).then((response) => {
      this.setState({blogPosts: response.data});
    })
  }

  renderBlogPosts() {
    if (this.state.blogPosts) {
      console.log(this.state.blogPosts);
      return this.state.blogPosts.data.map((data) => {
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
    if (this.state.blogPosts) {
      return this.renderBlogPosts()
    } else {
      return (
        <div>
          Loading...
        </div>
      );
    }
  }
}

export default Blog;
