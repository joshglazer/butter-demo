import React, { Component } from 'react';
import Butter from 'buttercms'

const butter = Butter('5c195e1e7759c417b1c4006b302ac52cb0d87f37');

class Contact extends Component {

  constructor(props) {
    super(props);

    this.state = {
      content: null
    };
  }

  componentWillMount() {
    butter.page.retrieve('*', 'contact').then((resp) => {
      this.setState({
        content: resp.data.data
      })
    });
  }

  render() {
    if (this.state.content) {
      return (
        <div>
          <h1>{this.state.content.headline}</h1>
          <div dangerouslySetInnerHTML={{__html: this.state.content.fields.content}} />
        </div>
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

export default Contact;
