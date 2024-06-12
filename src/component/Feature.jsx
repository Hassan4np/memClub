import { Col, Container, Row } from "react-bootstrap";

export default function Feature() {
  return (
    <div className="feature">
      <Container>
        <Row>
          <Col xs={12} className="text-center">
            <h1 className="feature-title">Features</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} xl={10}>
            <div className="feature-cards d-md-flex justify-content-between">
              <div className="feature-left">
                <div className="card-title">
                  <span>01</span>
                </div>
                <h3 className="mb-2 mb-md-4">
                  Auto-Compounding Vault Strategies
                </h3>
                <p>
                  Our protocol employs advanced auto-compounding mechanisms to
                  optimize your staking rewards. By automatically reinvesting
                  earned rewards, Meme Club ensures maximum yield for stakers
                  without the need for manual intervention.
                </p>
                <div className="d-flex align-items-center mt-auto">
                  <button className="btn-card">Read more</button>
                  <a href="#" className="d-flex align-items-center link-item">
                    <svg
                      width="27"
                      height="20"
                      viewBox="0 0 22 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.3486 6.07811L18.3431 14.8718L21.8017 14.8788L21.8315 0.161358L7.11404 0.131604L7.10704 3.5902L15.9007 3.62024L0.944573 18.516L3.39252 20.9739L18.3486 6.07811Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="feature-right">
                <div className="card2 d-flex ">
                  <div className="card-title">
                    <span>02</span>
                  </div>
                  <div>
                    <h3 className="mb-2 mb-md-4">Seamless Integration</h3>
                    <p>
                    Our protocol employs advanced auto-compounding mechanisms to optimize your staking rewards. By automatically reinvesting earned rewards, Meme Club ensures maximum yield for stakers without the need for manual intervention.
                    </p>
                    <div className="d-flex align-items-center mt-auto">
                      <button className="btn-card">Read more</button>
                      <a
                        href="#"
                        className="d-flex align-items-center link-item"
                      >
                        <svg
                          width="27"
                          height="20"
                          viewBox="0 0 22 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.3486 6.07811L18.3431 14.8718L21.8017 14.8788L21.8315 0.161358L7.11404 0.131604L7.10704 3.5902L15.9007 3.62024L0.944573 18.516L3.39252 20.9739L18.3486 6.07811Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card3 d-flex ">
                  <div className="card-title">
                    <span>03</span>
                  </div>
                  <div>
                  <h3 className="mb-2 mb-md-4">
                  Secure and Efficient
                  </h3>
                  <p>
                  Built on Solana, Meme Club benefits from the blockchain’s robust security features and unparalleled transaction speeds. Our protocol is designed to provide a secure and efficient staking experience, minimizing risk and maximizing returns
                  </p>
                  <div className="d-flex align-items-center mt-auto">
                    <button className="btn-card">Read more</button>
                    <a href="#" className="d-flex align-items-center link-item">
                      <svg
                        width="27"
                        height="20"
                        viewBox="0 0 22 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.3486 6.07811L18.3431 14.8718L21.8017 14.8788L21.8315 0.161358L7.11404 0.131604L7.10704 3.5902L15.9007 3.62024L0.944573 18.516L3.39252 20.9739L18.3486 6.07811Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
