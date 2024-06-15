import {Container} from "react-bootstrap";
import { IoLogoTwitter } from "react-icons/io5";
import logo from "../assets/img/logo.png"
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import footerimg from "../assets/img/footer-img.png";

export default function Footer() {
  return (
    <div className="footer position-relative z-0">
      <div className="position-absolute z-n1 footerimg"><img src={footerimg} alt="" /></div>
      <Container>
      <div className="footer-content">
        <div className="d-flex footer-content-text ">
          <div className="logo"><img src={logo} alt="" /></div>
          <div className="d-flex justify-content-between w-100 flex-wrap">
                <div className="list-item">
                <p>Menu</p>
                <ul>
                  <li>Institutional</li>
                  <li>Fee Discount</li>
                  <li>API Documentation</li>
                </ul>
                </div>
                <div className="list-item">
                <p>Menu</p>
                <ul>
                  <li>FAQ</li>
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                </ul>
                </div>
                <div className="list-item">
                <p>Menu</p>
                <ul>
                  <li>linSPIRIT</li>
                  <li>liHND</li>
                  <li>Bond</li>
                </ul>
                </div>
                <div className="list-item">
                <p className="follow">Follow us</p>
                <div className="gap-3 d-flex ">
                  <a href="#"><IoLogoTwitter className="" /></a>
                  <a href="#"><FaTelegramPlane  className="" /></a>
                  <a href="#"><FaLinkedinIn className="" /></a>
                  <a href="#"><IoLogoGithub className="" /></a>
                </div>
                </div>
          </div>
        </div>
        <div className="footer-content-copy-right d-flex justify-content-between flex-wrap ">
        <p>Copyright © 2024 Meme club . All Rights Reserved</p>
        <p>Terms of Use | Privacy Policy</p>
      </div>
        </div>
      </Container>
    </div>
  )
}
