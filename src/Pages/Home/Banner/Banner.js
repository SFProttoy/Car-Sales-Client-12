import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="slider">
      <Carousel className="">
        <Carousel.Item>
          <img
            className="d-block w-100 mb-5"
            src="https://i.ibb.co/C1MbB0B/ban1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="fw-bold fs-1 mt-5 text-dark">
              The Fancy You Need !
            </h3>
            <p className=" fw-bolder fs-3 text-dark">
              All high level cars are available.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 mb-5"
            src="https://i.ibb.co/zQ76wHv/ban2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="fw-bold fs-1 mt-5">High Profile Cars</h3>
            <p className=" fw-bolder fs-3">Speeds are here !!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 mb-5"
            src="https://i.ibb.co/JCpmnGf/ban3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="fw-bold fs-1 mt-5">Old is Gold</h3>
            <p className=" fw-bolder fs-3">Get your gold one.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
