import React, { useEffect, useState } from "react";
import { Button, Row } from "react-bootstrap";

const ManageOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [status, setStatus] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/purchases")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [status]);

  const handleCancel = (id) => {
    const proceed = window.confirm(
      '"Are you sure you want to cancel the order?"'
    );

    if (proceed) {
      const url = `http://localhost:5000/purchases/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Your order has been cancelled.");
            const remainingOrders = allOrders.filter(
              (order) => order._id !== id
            );
            setAllOrders(remainingOrders);
          }
        });
    }
  };

  // // update status

  const handleUpdateStatus = (id, order) => {
    order.status = "shipped";
    const url = `http://localhost:5000/purchases/${id}`;
    fetch(url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Your pending booking has been updated.");
          setStatus(true);
        }
      });
  };

  return (
    <div>
      <h1>Total Orders: {allOrders.length}</h1>
      <Row xs={1} md={3} className="container g-4 mx-auto">
        {allOrders.map((order) => (
          <div key={order._id}>
            <div class="row g-0">
              <div class="col-md-5 mt-4">
                <img src={order.carDetails.img} class="img-fluid" alt="..." />
                <h5 className="mt-3">{order.carDetails.name}</h5>
                <span className="fw-bolder">
                  Price: ${order.carDetails.price}
                </span>
              </div>
              <div class="col-md-7">
                <div class="card-body">
                  <span class="fs-5 fw-bolder mb-5">Name: {order.name}</span>
                  <br />
                  <span class="fw-bolder">Email: {order.email}</span>
                  <p className="mt-2 mb-3 fw-bolder">
                    Order Status: {order.status}
                  </p>
                  <Button
                    className="btn btn-success mb-3 btn-sm"
                    onClick={() => handleUpdateStatus(order._id, order)}
                  >
                    Ship
                  </Button>
                  <br />
                  <Button
                    className="btn btn-danger btn-sm"
                    size="sm"
                    onClick={() => handleCancel(order._id)}
                  >
                    Cancel Tour
                  </Button>

                  <br />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Row>
    </div>
  );
};

export default ManageOrders;
