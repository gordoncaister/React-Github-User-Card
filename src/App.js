import React from 'react';

import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={followers: []};
  }
  render () {
    return (
      <div className="App">
        Hi
      </div>
    );
  }
  
}

export default App;
