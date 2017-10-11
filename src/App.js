import './App.css';
import React from 'react';
import MyButtons from './components/MyButtons';

const buttonArray = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I'
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyButtons buttonArray={buttonArray} />
      </div>
    );
  }
}

export default App;
