import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function HomePage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel variant="dark" className="carousel" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../images/TS.jpg")}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../images/T.jpg")}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100"
          src={require("../images/b.jpg")}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default HomePage