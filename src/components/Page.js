import React, { Component } from 'react';
import Butter from 'buttercms'

const butter = Butter('5c195e1e7759c417b1c4006b302ac52cb0d87f37');

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      slug: null,
      content: null,
    };
  }

  getContent() {
    const slug = this.props.location.pathname.slice(1);
    this.setState(
      {slug: slug},
      () => {
        butter.page.retrieve('*', this.state.slug).then((resp) => {
          console.log(resp);
          this.setState({
            content: resp.data.data
          })
        }).catch((error) => {
          this.props.history.push({
            pathname: '/error',
          })
        });
      }
    );
  }

  componentDidMount() {
    this.getContent();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.getContent();
    }
  }

  render() {
    if (this.state.content) {
      return (
        <div>
          <h2>{this.state.content.fields.title}</h2>
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

export default Home;
