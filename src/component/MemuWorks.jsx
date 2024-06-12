import { Col, Container, Row } from "react-bootstrap";


export default function MemuWorks() {
  return (
    <div className="work">
      <Container>
      <div className="work-wrapper">
      <Row>
          <Col xs={12} md={6} >
           <div className="work-title">     <h2> How Does Meme Club Work?</h2></div>
          </Col>
          <Col xs={12} md={6} >
       <div className="work-des">   <p> Meme Club operates through a streamlined and user-friendly 
       process designed to make staking easy and rewarding for both project and user</p></div>
          </Col>
      </Row>
      <div className="work-wrapper-cards">
       <Row>
        <Col xs={12} md={4} ></Col>
        <Col xs={12} md={8} >
        <div className="work-item">
          <div className="work-card">
            <h4>Partnerships with Top Trading Memecoins</h4>
            <p>We collaborate with leading memecoin projects, seamlessly integrating them onto our platform. This ensures a diverse range of staking options for users and enhances the ecosystem’s overall liquidity and stability.</p>
            <div ><img src="" alt="" /></div>
          </div>
        </div>
        </Col>
       </Row>
      </div>
      </div>
      </Container>
    </div>
  )
}
