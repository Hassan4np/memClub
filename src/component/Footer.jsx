import { Col, Container, Row } from "react-bootstrap";
import { IoLogoTwitter } from "react-icons/io5";
import logo from "../assets/img/logo.png"

export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col xs={12}>
          <div className="footer-content">
            <Row className="justify-content-between">
              <Col xs={12} md={3}>
              <div className="footer-logo"><img src={logo} alt="" /></div>
              </Col>
              <Col xs={12} md={6} >
              <Row>
                <Col xs={12} md={4} >
                <p>Menu</p>
                <ul>
                  <li>Institutional</li>
                  <li>Fee Discount</li>
                  <li>API Documentation</li>
                </ul>
                </Col>
                <Col xs={12} md={4} >
                <p>Menu</p>
                <ul>
                  <li>FAQ</li>
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                </ul>
                </Col>
                <Col xs={12} md={4} >
                <p>Menu</p>
                <ul>
                  <li>linSPIRIT</li>
                  <li>liHND</li>
                  <li>Bond</li>
                </ul>
                </Col>
              </Row>
              </Col>
              <Col xs={12} md={3} >
              <div className="footer-social">
                <p>Follow us</p>
                <div>
                  <a href="#"><IoLogoTwitter/></a>
                </div>
              </div>
              </Col>
            </Row>
          </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="copy-right d-flex justify-content-between ">
              <p>Copyright © 2024 Meme club . All Rights Reserved</p>
              <p>Terms of Use ｜ Privacy Policy</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
