import React from "react";
import { Accordion, Col, Row } from "react-bootstrap";

const Info = () => {
  return (
    <div className="container mt-5">
      <Row xs={1} md={2} c>
        <Col>
          <h1>OUR MISSION</h1>
          <p>
            We offer much range of cars to help our countrymen. Our
            professionals know how to handle a wide range of car dealings.
            Whether you want to drive a medium-sized car or an SUV, we strive to
            ensure that your car will be performing at its best before leaving
            our car shop. We are ready to help you in suggesting any range of
            car which help you to fulfill your desire and help you throughout
            your journey.
          </p>
        </Col>
        <Col>
          <h1>POPULAR QUESTIONS</h1>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>How Can I Save Money on Gas?</Accordion.Header>
              <Accordion.Body>
                There are dozens of downloadable smartphone apps that let you
                know where the cheapest gas is in your area. It’s also helpful
                to purchase a loyalty card at a grocery store or major gas
                provider, so you can earn savings or collect reward points when
                you spend money. Filling up early or later in the day can
                sometimes mean cheaper gas. Also, avoid gas stations along the
                highway as they usually have higher prices.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Can I Switch to Synthetic Oil or a Different Grade
              </Accordion.Header>
              <Accordion.Body>
                Consult your vehicle’s owner manual. There, you’ll find which
                oil grade to use. It’s best to only use that grade. As far as
                switching to synthetic oil, it’s usually problem-free! Just be
                careful… If your vehicle’s older (i.e. 8 or more years) and
                you’ve been using conventional oil for a long time, synthetic
                oil may not be a good idea.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                What’s the Difference between Over and Understeer?
              </Accordion.Header>
              <Accordion.Body>
                Oversteer is when your car turns more than you intended it too.
                Understeer is when your car turns less than what you intended it
                to These terms are commonly used among car enthusiasts and sport
                car drivers. Most times, a professional driver is referring to
                their vehicle’s response to a particular steering maneuver.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </div>
  );
};

export default Info;
