import React from 'react';
import { Button } from 'react-bootstrap';

class MyButton extends React.Component {
  render() {
    const b = this.props.b;
    if (this.props.selected === true) {
      return (<Button bsSize="large" onClick={this.props.updateSelected.bind(null, '')} active>{b}</Button>);
    } else {
      return (<Button bsSize="small" onClick={this.props.updateSelected.bind(null, b)}        >{b}</Button>);
    }
  }
}

export default MyButton;
