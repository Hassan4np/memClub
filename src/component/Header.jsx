import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.png"

export default function Header() {
  return (
    <div className='header'>
      <Container>
        <Row>
          <Col xs={12}>
          <div className="header-nav d-flex justify-content-between align-content-center">
            <div className="logo"><img src={logo} alt="" /></div>
            <button className="btn">Connect Wallet</button>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
