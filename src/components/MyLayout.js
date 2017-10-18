import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

class MyLayout extends React.Component {
  render() {
    return(
      <div>
        hey!
        <Grid>
          <Col xs={6} md={4} bsClass='dtg'>Col xs=6 md=8</Col>
          <Col xs={6} md={4} bsClass='dtg'>Col xs=6 md=4</Col>
        </Grid>
      </div>
    );
  }
}

export default MyLayout;