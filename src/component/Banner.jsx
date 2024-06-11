import { Col, Container, Row } from "react-bootstrap";
import bannerimg from "../assets/img/bannerimg.png"

export default function Banner() {
  return (
    <div className="banner position-relative z-1">
      <Container>
        <Row className="justify-content-between">
          <Col xs={12} md={6} className="justify-content-center align-content-center" >
          <div className="banner-content">
            <h1>Solana&apos;s Memecoin Staking Protocol</h1>
            <p>Meme Club is the first vertically integrated decentralized memecoin staking platform built on Solana with auto-compounding vault strategies</p>
            <div className="d-flex align-items-center gap-2">
              <button  className="btn btn1">Stake now</button>
              <button className="btn">Find out more<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.172 12.5742L8.222 7.6242L9.636 6.2102L16 12.5742L9.636 18.9382L8.222 17.5242L13.172 12.5742Z" fill="#CDCDD2"/>
                </svg>
              </button>
            </div>
          </div>
          </Col>
          <Col xs={12} md={5}>
          <div className="banner-img">
            <img src={bannerimg} alt="" />
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
