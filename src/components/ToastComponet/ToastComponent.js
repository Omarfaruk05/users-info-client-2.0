import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

const ToastComponent = ({setShow, show}) => {
    return (
        <Row style={{position:"absolute",right:"20px", top:"20px", zIndex:"1"}}>
        <Col md={10} >
          <Toast className='bg-white' onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header>
              <strong className="me-auto text-info">Token</strong>
            </Toast.Header>
            <Toast.Body className='text-success fw-bold'>Token is saved in localStorage.</Toast.Body>
          </Toast>
        </Col>
        <Col xs={6}>
        </Col>
      </Row>
    );
};

export default ToastComponent;