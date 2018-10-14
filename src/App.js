import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GenerateCitation from './GenerateCitation';
import DisplayCitation from './DisplayCitation';

const  sampleCitation = {
  quote : "I used to be with it. But then they changed what it was. Now what I'm with isn't it, and what's it seems scary and wierd. It'll happen to you.",
  character : "Abe Simpson",
  image : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FAbrahamSimpson.png?1497567511593","characterDirection":"Right"
};

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      citation : sampleCitation
    };
  }

  getCitation() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=num")
      .then(response => response.json())
      .then(data => {
        this.setState({
          citation: data[0],
        });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <div>
          <GenerateCitation  selectCitation={() => this.getCitation()}/>
          <DisplayCitation citation={this.state.citation} />
        </div>
      </div>
    );
  }
}

export default App;
