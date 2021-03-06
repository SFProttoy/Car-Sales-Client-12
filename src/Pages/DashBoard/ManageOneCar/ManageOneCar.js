import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Swal from "sweetalert2";

const ManageOneCar = (props) => {
  const { _id, name, img, price } = props.car;
  const { cars } = props;
  const { setCars } = props;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure you want to delete?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "No!",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://nameless-chamber-15143.herokuapp.com/cars/${id}`;
        fetch(url, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your product has been deleted.",
                "success"
              );
              const remainingCars = cars.filter((car) => car._id !== id);
              setCars(remainingCars);
            }
          });
      }
    });
  };

  return (
    <div>
      <Col>
        <Card className="mt-4">
          <Row xs={1} md={4}>
            <Col>
              <Card.Img className="mx-auto" variant="top" src={img} />
            </Col>
            <Col>
              <h4 style={{ marginTop: "50px" }}>{name}</h4>
            </Col>
            <Col>
              <h5 style={{ marginTop: "53px" }}>Price: ${price}</h5>
            </Col>
            <Col>
              <Button
                className="btn btn-danger common-btn"
                size="sm"
                onClick={() => handleDelete(_id)}
                style={{ marginTop: "50px" }}
              >
                Delete Product
              </Button>
            </Col>
          </Row>
        </Card>
      </Col>
    </div>
  );
};

export default ManageOneCar;
