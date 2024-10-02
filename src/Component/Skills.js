import { Carousel, Card, Button, Stack } from "react-bootstrap";
import logo from "../assets/img/logo.png";
//import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Skills() {
  const reviews = [
    { _id: 1, text: "abc" },
    { _id: 2, text: "def" },
  ];

  return (
    <div>
      <h1 className="text-center fw-bold my-5">My Skills ({reviews.length})</h1>
      <div className="bg-dark bg-opacity-25 container-fluid">
        <Carousel expand="lg"  style={{ height: 500 }}>
          {reviews.map((review, index) => (
            <Carousel.Item style={{ height: 500 }}>
              <Stack
                direction="horizontal"
                className="h-100 justify-content-center align-items-center"
                gap={3}
              >
                <Card ClassName="rounded" style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Stack>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Skills;
