import React, { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import HomeCar from "../HomeCar/HomeCar";

const HomeCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://nameless-chamber-15143.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
      });
  }, []);
  return (
    <div>
      {cars.length === 0 ? (
        <Spinner className="mt-5" animation="border" variant="dark" />
      ) : (
        <h1 className="mt-5">
          OUR <span style={{ color: "#2874A6" }}>CARS</span>
          <Row xs={1} md={3} className="container g-4 mx-auto">
            {cars.slice(0, 6).map((car) => (
              <HomeCar key={car._id} car={car}></HomeCar>
            ))}
          </Row>
        </h1>
      )}
    </div>
  );
};

export default HomeCars;
