import React from 'react';
import { Button } from 'react-bootstrap';

// const kk = c => {
//   console.log('this:', c);
//   console.log('this.props.children:', c.props);
// };

class MyButton extends React.Component {
  render() {
    const b = this.props.b;
    return (
      <Button
        bsSize="large"
        onClick={b.func}
      >
        {b.name}
      </Button>
    )
  }
}

export default MyButton;
