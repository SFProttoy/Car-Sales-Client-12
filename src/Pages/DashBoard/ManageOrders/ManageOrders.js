import React, { useEffect, useState } from "react";
import { Button, Row } from "react-bootstrap";
import Swal from "sweetalert2";

const ManageOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("https://nameless-chamber-15143.herokuapp.com/purchases")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [status]);

  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure to cancel this order?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "No!",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://nameless-chamber-15143.herokuapp.com/purchases/${id}`;
        fetch(url, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Cancelled", "Order has been cancelled.", "success");
              const remainingOrders = allOrders.filter(
                (order) => order._id !== id
              );
              setAllOrders(remainingOrders);
            }
          });
      }
    });
  };

  // // update status

  const handleUpdateStatus = (id, order) => {
    order.status = "shipped";
    const url = `https://nameless-chamber-15143.herokuapp.com/purchases/${id}`;
    fetch(url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Shipped The Order",
            showConfirmButton: false,
            timer: 2000,
          });
          setStatus(id);
        }
      });
  };

  return (
    <div>
      <h1 className="mt-4 mb-4">Total Orders: {allOrders.length}</h1>
      <Row xs={1} md={3} className="container g-4 mx-auto">
        {allOrders.map((order) => (
          <div key={order._id}>
            <div className="row g-0">
              <div className="col-md-5 mt-4">
                <img
                  src={order.carDetails.img}
                  className="img-fluid"
                  alt="..."
                />
                <h5 className="mt-3">{order.carDetails.name}</h5>
                <span className="fw-bolder">
                  Price: ${order.carDetails.price}
                </span>
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <span className="fs-5 fw-bolder mb-5">
                    Name: {order.name}
                  </span>
                  <br />
                  <span className="fw-bolder">Email: {order.email}</span>
                  <p className="mt-2 mb-3 fw-bolder">
                    Order Status: {order.status}
                  </p>
                  <Button
                    className="btn btn-success mb-3"
                    onClick={() => handleUpdateStatus(order._id, order)}
                  >
                    Ship
                  </Button>
                  <br />
                  <Button
                    className="btn btn-danger"
                    size="sm"
                    onClick={() => handleCancel(order._id)}
                  >
                    Cancel Order
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
