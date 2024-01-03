import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function FirstSlider({ slides }) {
  return (
    <Carousel  data-bs-theme="dark" className="w-3/6  "
    controls={false}
    interval={1000} >
      {slides.map((slide, index) => (
        <Carousel.Item key={index} >
          <div
            className="bg-green-600 rounded-lg"
            style={{
              backgroundImage: `url(${slide.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Container className="bg-opacity-60 h-72 rounded-lg bg-slate-900 ">
              <Row className="px-4 py-8">
                <Col sm={8}>
                  <Row className="flex items-center mb-0">
                    <Col
                      sm={2}
                      className=" flex flex-col items-center justify-start"
                    >
                      <Image
                        src="/images/starRating.png"
                        rounded
                        className="w-14 h-12"
                      />
                      <p className="text-yellow-500 font-semibold">
                        {slide.rating}
                      </p>
                    </Col>
                    <Col>
                      <h2 className="text-white font-semibold text-2xl font-Finlandica line-clamp-1 uppercase mb-0">
                        {slide.title}
                      </h2>
                      <h5 className="text-yellow-400 font-medium text-sm uppercase ">
                        {slide.type}
                      </h5>
                    </Col>
                  </Row>
                  <Row>
                    <p className="text-white font-medium text-sm uppercase mb-1 mt-0">
                    {slide.genre}
                    </p>
                    <h4 className="text-white font-semibold text-lg uppercase mb-0">
                      Summary
                    </h4>
                    <p className="text-white font-normal text-sm capitalize line-clamp-2 mb-0">
                      {slide.description}
                      fsdsfs
                      sfdsdfsdf
                      sdfsdfsd
                      sfdsdfa-flip-horizontalsdfsdf
                      fsdfsfsdfsdfsdf 
                      sdfsdfsdf 
                      sdfsdfsfdsfsdfsdf
                    </p>
                    <p className="text-white font-normal text-lg capitalize">
                      Status:
                      <span className="text-yellow-500 pl-2 font-normal text-lg capitalize">
                        {slide.status}
                      </span>
                    </p>
                  </Row>
                </Col>
                <Col sm={4} className=" flex justify-end ">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    rounded
                    className="cover max-w-40 max-h-48"
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default FirstSlider;
