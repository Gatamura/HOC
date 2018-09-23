import React, { Component } from 'react';
import HOC from './HOC';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.list.map(item => <div key={`App__${item}`}>{item}</div>)}
      </div>
    );
  }
}

export default HOC(App);
