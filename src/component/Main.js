import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.pole = props.pole === 'man' ? 'Mr' : 'Ms';
    this.state = {
      comments: [],
    };
  }

  render() {
    return (
      <div className="main">
        <h2>
          Hello world from {this.pole} {this.props.name}!
        </h2>

        <p>{this.state.comments}</p>
      </div>
    );
  }
}

export default Main;
