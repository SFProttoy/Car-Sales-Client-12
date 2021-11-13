import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleCarHome = (props) => {
  const { _id, name, description, img, price } = props.car;
  return (
    <div>
      <Col>
        <Card className="card-data mt-4">
          <Card.Img className="mx-auto" variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <p className="fs-6 info">{description}</p>
            <h5>Price: ${price}</h5>
            <Link to={`/purchase/${_id}`}>
              <Button className="btn btn-buy">Buy</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default SingleCarHome;
