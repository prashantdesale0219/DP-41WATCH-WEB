import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'; // Optional: For custom styling
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>41 Watch</h5>
            <p>Buy, sell, trade, finance in complete transparency</p>
            <div className="d-flex">
              <a href="https://www.facebook.com" className="text-white ms-5 me-2 fs-5">
              <FaFacebookSquare />
              </a>
              <a href="https://www.instagram.com" className="text-white fs-5">
              <FaInstagramSquare />
              </a>
            </div>
          </Col>
          <Col md={2}>
            <h6>41 WATCH</h6>
            <ul className="list-unstyled">
              <li>About us</li>
              <li>Workshop</li>
              <li>Our values</li>
              <li>The Blog "Autour de mon Poignet"</li>
              <li>Press</li>
              <li>Kit Presse</li>
              <li>Showroom</li>
              <li>Contact</li>
            </ul>
          </Col>
          <Col md={2}>
            <h6>OUR OFFER</h6>
            <ul className="list-unstyled">
              <li>Buying guide</li>
              <li>Selling guide</li>
              <li>Financing solutions</li>
            </ul>
          </Col>
          <Col md={2}>
            <h6>FEATURED WATCHES</h6>
            <ul className="list-unstyled">
              <li>Audemars Piguet Royal Oak</li>
              <li>Rolex Submariner</li>
              <li>Rolex GMT Master II</li>
              <li>Rolex Daytona</li>
              <li>Patek Philippe Nautilus</li>
              <li>Omega Speedmaster</li>
              <li>Tag Heuer Monaco</li>
            </ul>
          </Col>
          <Col md={2}>
            <h6>INFORMATIONS</h6>
            <ul className="list-unstyled">
              <li>Terms and conditions</li>
              <li>Legal terms</li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={6}>
            <Form inline>
              <Form.Control
                type="email"
                placeholder="My email to subscribe to the newsletter"
                className="me-2"
              />
              <Button variant="outline-light">OK</Button>
            </Form>
          </Col>
          <Col md={6} className="text-md-end">
            <img
              src="https://www.41watch.com/themes/41watch/img/icon/footer-cart-bis.svg"
              alt="Secure Payment"
              className="me-2"
            />
            <img
              src="https://www.41watch.com/themes/41watch/img/icon/fedex.svg"
              alt="Secure Delivery"
              className="me-2"
            />
          </Col>
        </Row>
        <Row className="mt-3 text-center">
          <Col>
            <small>
              <a href="#" className="text-white">
                Facebook
              </a>
              <a href="#" className="text-white ms-3">
                YouTube
              </a>
              <a href="#" className="text-white ms-3">
                Instagram
              </a>
              <a href="#" className="text-white ms-3">
                LinkedIn
              </a>
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
