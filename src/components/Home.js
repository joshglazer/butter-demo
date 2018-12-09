import React, { Component } from 'react';
import Butter from 'buttercms'

const butter = Butter('5c195e1e7759c417b1c4006b302ac52cb0d87f37');

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      content: null
    };
  }

  componentWillMount() {
    butter.page.retrieve('*', 'homepage').then((resp) => {
      this.setState({
        content: resp.data.data
      })
    });
  }

  render() {
    if (this.state.content) {
      const homepage = this.state.content;
      console.log(homepage);
      return (
        <h1>{homepage.headline}</h1>
      );
    } else {
      return (
        <div>
          Loading...
        </div>
      );
    }
  }
}

export default Home;
