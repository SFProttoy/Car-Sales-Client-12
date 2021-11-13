import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, Col } from "react-bootstrap";

const MyOrder = (props) => {
  const { myOrders, setMyOrders } = props;
  const { img, name, price } = props.myOrder.carDetails;
  const { _id, email, status } = props.myOrder;

  // Cancel orders
  const handleDelete = (id) => {
    const proceed = window.confirm(
      '"Are you sure you want to cancel your order?"'
    );

    if (proceed) {
      const url = `https://nameless-chamber-15143.herokuapp.com/purchases/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Your order has been cancelled.");
            const remainingOrders = myOrders.filter(
              (order) => order._id !== id
            );
            setMyOrders(remainingOrders);
          }
        });
    }
  };

  return (
    <div>
      <Col>
        <Card className="mt-4">
          <Card.Img className="mx-auto" variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>

            <p className="fs-4 fw-bolder">Price: ${price}</p>
            <p className="fs-5 fw-bolder">Email: {email}</p>
            <Button
              className="btn btn-danger"
              onClick={() => handleDelete(_id)}
            >
              Cancel Order
            </Button>
            <h5 className="mt-3">Order Status: {status}</h5>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default MyOrder;
