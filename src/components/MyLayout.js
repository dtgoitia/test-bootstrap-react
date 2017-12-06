import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

class MyLayout extends React.Component {
  render() {
    return(
      <div>
        hey!
        <div className='container'>
          <div className='col-lg-12 col-sm-4'>aaa</div>
          <div className='col-lg-12 col-sm-4'>bbb</div>
          <Col sm={6} lg={3} xl={3} bsClass='dtg'>Col sm-6 lg-3 xl-3</Col>
          <Col sm={6} lg={3} xl={3} bsClass='dtg'>Col sm-6 lg-3 xl-3</Col>
          <Col sm={6} lg={3} xl={3} bsClass='dtg'>Col sm-6 lg-3 xl-3</Col>
          <Col sm={6} lg={3} xl={3} bsClass='dtg'>Col sm-6 lg-3 xl-3</Col>
          <Col sm={6} lg={3} xl={3} bsClass='dtg'>Col sm-6 lg-3 xl-3</Col>
          <Col sm={6} lg={3} xl={3} bsClass='dtg'>Col sm-6 lg-3 xl-3</Col>
          <Col sm={6} lg={3} xl={3} bsClass='dtg'>Col sm-6 lg-3 xl-3</Col>
          <Col sm={6} lg={3} xl={3} bsClass='dtg'>Col sm-6 lg-3 xl-3</Col>
        </div>
      </div>
    );
  }
}

export default MyLayout;