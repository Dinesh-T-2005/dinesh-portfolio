import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import logo1 from "../assets/img/logo2.png"
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo1} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/dinesh-m-a5698b330/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/share/1BF9hXVyrX/"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/__.dinuxx__?igsh=MTd1MzU1NWIzOGt5Mw=="><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2026. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
