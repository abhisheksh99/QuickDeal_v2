import { Container, Row, Col } from "react-bootstrap";
import React from "react";

function FormContainer({ children }) {
  return (
    <Container>
      <Row className="justify-content-md-center align-items-center vh-80">
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
}

export default FormContainer;
