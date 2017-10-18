import './App.css';
import React from 'react';
import MyButtons from './components/MyButtons';
import MyLayout from './components/MyLayout';

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
        <MyLayout />
      </div>
    );
  }
}

export default App;
