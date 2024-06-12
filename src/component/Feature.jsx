import { Col, Container, Row } from "react-bootstrap";


export default function Feature() {
  return (
    <div className="feature">
      <Container>
        <Row>
          <Col xs={12} className="text-center">
          <h1 className="feature-title">Features</h1></Col>
        </Row>
      </Container>
    </div>
  )
}
