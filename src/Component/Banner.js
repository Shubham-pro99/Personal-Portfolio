import { Container, Row, Col } from "react-bootstrap";
import "../Component-Styles/banner.css";

function Banner() {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={12} lg={7}>
            <h1>Hi I'm Shubham Redij</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              corporis obcaecati omnis consequuntur officia in temporibus
              asperiores harum dolorem. Ratione neque ex qui blanditiis nam
              similique cum voluptatum nisi magnam?
            </p>
            <span className="tagline">Download My Resume</span>
          </Col>
          <Col>
            <span className="Image ml-5 d-flex justify-content-center">
              My Image
            </span>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
