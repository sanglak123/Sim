import React from "react";
import { Carousel } from "react-bootstrap";

const Sim_Banners = () => {
  return (
    <section id="sim_banner" className="mb-5">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/banner/banner1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/banner/banner2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Sim_Banners;
