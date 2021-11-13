import React, { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import ManageOneCar from "../ManageOneCar/ManageOneCar";

const ManageCars = () => {
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
        <h1 className="mt-4 mb-4">
          Manage Cars
          <Row xs={1} md={1} className="container g-4 mx-auto">
            {cars.map((car) => (
              <ManageOneCar
                key={car._id}
                car={car}
                cars={cars}
                setCars={setCars}
              ></ManageOneCar>
            ))}
          </Row>
        </h1>
      )}
    </div>
  );
};

export default ManageCars;
