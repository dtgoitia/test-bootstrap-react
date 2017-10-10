import React from 'react';
import {MyButton} from './components/MyButton.js';
import './App.css';

const buttonArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I"
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {
          buttonArray.map((b, i) => {
            return <MyButton key={i} b={b} />;
          })
        }
      </div>
    );
  }
}

export default App;
