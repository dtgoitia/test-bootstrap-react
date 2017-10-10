import React from 'react';
import MyButton from './MyButton';

class MyButtons extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected: ''
    };

    this.updateSelected = this.updateSelected.bind(this);
  }

  updateSelected(selectedName) {
    this.setState({selected: selectedName});
  }

  render() {
    console.log('this.state.selected:', this.state.selected);
    return (
      this.props.buttonArray.map((b,i) => {
        return(
          <MyButton
            key={i}
            b={b}
            updateSelected={this.updateSelected}
            selected={this.state.selected === b}
          />
        );
      })
    );
  }
}

export default MyButtons;