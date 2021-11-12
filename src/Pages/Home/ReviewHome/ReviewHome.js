import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "./ReviewHome.css";
const ReviewHome = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <Row xs={1} md={3} className="container g-4 mx-auto">
        {reviews.map((review) => (
          <div key={review._id}>
            <Col>
              <Card className="mt-4 reviews mx-auto">
                <Card.Body>
                  <Card.Title>{review.name}</Card.Title>
                  <p className="fw-bolder">{review.description}</p> <br />
                  {[...Array(5)].map((star, i) => {
                    const total = i + 1;
                    const rating = review.ratings;
                    return (
                      <FaStar
                        key={i}
                        size={20}
                        color={total <= rating ? "#2874a6" : "gray"}
                      ></FaStar>
                    );
                  })}
                </Card.Body>
              </Card>
            </Col>
          </div>
        ))}
      </Row>
    </div>
  );
};

export default ReviewHome;
