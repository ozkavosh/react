import { Container, Carousel } from "react-bootstrap";
import img1 from "../../img/carousel1.png";
import img2 from "../../img/carousel2.png";
import img3 from "../../img/carousel3.png";

import "./Banner.css";

const Banner = () => {
  return (
    <Container
      fluid
      className="banner bg-dark align-items-center d-flex justify-content-center pb-3"
    >
      <Carousel variant="dark" className="w-100 h-100">
        <Carousel.Item>
          <img
            className="d-block"
            src={img1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={img2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={img3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Banner;
