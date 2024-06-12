import { Col, Container, Row } from "react-bootstrap";
import icon from "../assets/img/cardicon.png"
import icon2 from "../assets/img/cardicon2.png"
import icon3 from "../assets/img/cardcion3.png"
import shap from "../assets/img/clubshap.png"
export default function MemuClub() {
  const cards=[
    {
      icon:`${icon}`,
      title:"Incentivizing Longer Holding",
      des:"By allowing memecoin holders to stake their tokens, Meme Club enables users to accrue yield and earn rewards. "
    },
    {
      icon:`${icon2}`,
      title:"Increasing Retention",
      des:"Staking rewards encourage users to retain their memecoins for extended periods, stabilizing their value and promoting a more resilient market."
    },
    {
      icon:`${icon3}`,
      title:"Supporting the Meme Economy",
      des:"Extending the life span of memecoins beyond the typical 72 hours contributes to the overall health and growth of the meme economy."
    },
  ]
  return (
    <div className="menuclub position-relative z-0">
      <div className="menuclub-shap position-absolute z-n1"><img src={shap} alt="" /></div>
       <Container>
       <Row className="justify-content-center">
          <Col xs={12} md={8}>
          <div className="menuclub-heading text-center w-100  d-flex flex-column">
            <h1>Why Meme Club?</h1>
            <p>The memecoin market is known for its rapid fluctuations and short life spans, often lasting only about 72 hours. This volatility and the holders  short attention spans can undermine the stability and growth of the meme economy. Meme Club addresses these issues head-on with a staking protocol that incentivizes longer holding and increases retention.</p>
          </div>
          </Col>
        </Row>
        <Row className="g-0">
        {
          cards.map((item,idx)=><Col xs={12} md={4} key={idx} className="d-flex" >
          <div className="menuclub-cards">
           <div className="image"><img src={item.icon} alt="" /></div>
           <h3 className="mb-2 md-mb-4">{item.title}</h3>
           <p>{item.des}</p>
           <div className="d-flex align-items-center mt-auto">
              <button className="btn-card">Read more</button>
              <a href="#" className="d-flex align-items-center link-item "><svg width="27" height="20" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.3486 6.07811L18.3431 14.8718L21.8017 14.8788L21.8315 0.161358L7.11404 0.131604L7.10704 3.5902L15.9007 3.62024L0.944573 18.516L3.39252 20.9739L18.3486 6.07811Z" fill="white"/>
              </svg>
            </a>
           </div>
          </div>
          </Col>)
        }
        </Row>
       </Container>
    </div>
  )
}
