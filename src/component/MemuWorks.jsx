import { Col, Container, Row } from "react-bootstrap";
import card1 from "../assets/img/workcard1.png"
import card2 from "../assets/img/workcard2.png"
import card3 from "../assets/img/workcard3.png"
import card4 from "../assets/img/workcard4.png"
import workbg from "../assets/img/workbg.png"
import workbg2 from "../assets/img/workshap2.png"


export default function MemuWorks() {
  const cards=[
    {
      title: "Partnerships with Top Trading Memecoins",
      des:"We collaborate with leading memecoin projects, seamlessly integrating them onto our platform. This ensures a diverse range of staking options for users and enhances the ecosystem’s overall liquidity and stability.",
      icon: `${card1}`
    },
    {
      title: "Staking Mechanism",
      des:"Holders of partnered memecoins can stake their tokens on our secure platform. The process is straightforward, enabling users to start earning rewards with minimal effort.",
      icon: `${card2}`
    },
    {
      title: "Earning Points and Airdrops",
      des:"Users earn points by staking their tokens. These points accumulate over time and make users eligible for $MC token airdrops, providing an additional layer of rewards and incentives.",
      icon: `${card3}`
    },
    {
      title: "Project Listing Requests",
      des:"We offer an easy application process for projects we do not directly contact but are interested in getting their token listed for staking. Click here to submit a project listing request and join the Meme Club ecosystem",
      icon: `${card4}`
    },
  ]
  return (
    <div className="work position-relative z-1">
      <div className="position-absolute z-n1  workbg2 "><img src={workbg2} alt="" /></div>
      <Container>
      <div className="work-wrapper position-relative z-1">
      <div className="position-absolute z-n1 workbg  start-0"><img src={workbg} alt="" /></div>

      <Row className="justify-content-between work-heading">
          <Col xs={12} md={5} >
           <div className="work-title"><h2> How Does Meme Club Work?</h2></div>
          </Col>
          <Col xs={12} md={6} >
       <div className="work-des"><p> Meme Club operates through a streamlined and user-friendly 
       process designed to make staking easy and rewarding for both project and user</p></div>
          </Col>
      </Row>
      <div className="work-wrapper-cards ">
       <Row className="justify-content-between">
        <Col xs={12} md={4} ></Col>
        <Col xs={12} md={8} >
        <div className="work-item d-flex flex-wrap justify-content-between">
         {
          cards.map((item,idx)=>( <div className="work-item-card position-relative z-1 mb-2 mb-md-4" key={idx}>
            <h4>{item.title}</h4>
            <p>{item.des}</p>
            <div className="position-absolute z-n1 cardimg" ><img className="w-100 h-100 object-fit-contain" src={item.icon} alt="" /></div>
          </div>))
         }
        </div>
        <Row>
      {/* {
        cards.map((item,idx=>( <Col xs={12} md={6} key={idx}>
          <div className="work-item-card position-relative z-1 mb-2 mb-md-4" key={idx}>
            <h4>{item.title}</h4>
            <p>{item.des}</p>
            <div className="position-absolute z-n1 cardimg" ><img className="w-100 h-100 object-fit-contain" src={item.icon} alt="" /></div>
          </div>
          </Col>)))
      } */}
        </Row>
        </Col>
       </Row>
      </div>
      </div>
      </Container>
    </div>
  )
}
