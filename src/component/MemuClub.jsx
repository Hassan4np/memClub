import { Col, Container, Row } from "react-bootstrap";

export default function MemuClub() {
  return (
    <div className="menuclub">
       <Container>
       <Row className="justify-content-center">
          <Col xs={12} md={7}>
          <div className="menuclub-heading text-center">
            <h1>Why Meme Club?</h1>
            <p>The memecoin market is known for its rapid fluctuations and short life spans, often lasting only about 72 hours. This volatility and the holders  short attention spans can undermine the stability and growth of the meme economy. Meme Club addresses these issues head-on with a staking protocol that incentivizes longer holding and increases retention.</p>
          </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
          <div className="menuclub-cards">
           <div><img src="" alt="" /></div>
           <h1>Incentivizing Longer Holding</h1>
           <p>By allowing memecoin holders to stake their tokens, Meme Club enables users to accrue yield and earn rewards. </p>
           <div>
            <button>Read more</button>
            <a href="#"><svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.3486 6.07811L18.3431 14.8718L21.8017 14.8788L21.8315 0.161358L7.11404 0.131604L7.10704 3.5902L15.9007 3.62024L0.944573 18.516L3.39252 20.9739L18.3486 6.07811Z" fill="white"/>
              </svg>
            </a>
           </div>
          </div>
          </Col>
        </Row>
       </Container>
    </div>
  )
}
