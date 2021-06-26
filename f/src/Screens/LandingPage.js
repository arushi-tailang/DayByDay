import { Container, Row, Button } from "react-bootstrap";
import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro">
            <div>
              <h1 className="title"> Welcome to Day By Day</h1>
              <p className="subtitle">One safe place for all your notes.</p>
            </div>
            <div className="button">
              <a href="/login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </a>
              <a href="/login">
                <Button
                  size="lg"
                  className="landingbutton"
                  variant="outline-primary"
                >
                  Sign up
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
