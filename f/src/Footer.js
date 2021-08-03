import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        position: "relative",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        backgroundColor: " black",
        color: "white",
      }}
    >
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy;{" "}
            <a href="https://github.com/arushi-tailang">Day By Day</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
